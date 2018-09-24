package com.intercon.interconalarmeraspberrypi;


import android.graphics.Bitmap;
import android.hardware.Camera;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Surface;
import android.widget.FrameLayout;

import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.FirebaseApp;
import com.google.firebase.ml.vision.FirebaseVision;
import com.google.firebase.ml.vision.common.FirebaseVisionImage;
import com.google.firebase.ml.vision.face.FirebaseVisionFace;
import com.google.firebase.ml.vision.face.FirebaseVisionFaceDetector;
import com.google.firebase.ml.vision.face.FirebaseVisionFaceDetectorOptions;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity implements CameraPreview.ReadBuffer{

    private Camera mCamera;
    private CameraPreview mPreview;

    private FirebaseVisionFaceDetectorOptions options;
    public boolean analisando;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        options =
                new FirebaseVisionFaceDetectorOptions.Builder()
                        .setModeType(FirebaseVisionFaceDetectorOptions.ACCURATE_MODE)
                        .setLandmarkType(FirebaseVisionFaceDetectorOptions.NO_LANDMARKS)
                        .setClassificationType(FirebaseVisionFaceDetectorOptions.ALL_CLASSIFICATIONS)
                        .setTrackingEnabled(false)
                        .build();

        FirebaseApp.initializeApp(this);

        // Create an instance of Camera
        mCamera = getCameraInstance();

        Camera.CameraInfo info = new android.hardware.Camera.CameraInfo();
        Camera.getCameraInfo(1, info);
        int rotation = getWindowManager().getDefaultDisplay().getRotation();
        int degrees = 0;
        switch (rotation) {
            case Surface.ROTATION_0: degrees = 0; break;
            case Surface.ROTATION_90: degrees = 90; break;
            case Surface.ROTATION_180: degrees = 180; break;
            case Surface.ROTATION_270: degrees = 270; break;
        }

        int result;
        result = (info.orientation + degrees) % 360;
        result = (360 - result) % 360;
        mCamera.setDisplayOrientation(result);

        mPreview = new CameraPreview(this, mCamera);
        mPreview.setListener(this);
        FrameLayout preview = (FrameLayout) findViewById(R.id.camera_preview);
        preview.addView(mPreview);

    }

    /** A safe way to get an instance of the Camera object. */
    public static Camera getCameraInstance(){
        Camera c = null;
        try {
            Camera.CameraInfo cameraInfo = new Camera.CameraInfo();
            for (int i = 0; i < 2; i++) {
                Camera.getCameraInfo(i, cameraInfo);
                if (cameraInfo.facing == Camera.CameraInfo.CAMERA_FACING_FRONT) {
                    Log.e("camerafront", "front : " + i);
                }
            }

            int num = Camera.getNumberOfCameras();
            c = Camera.open(1); // attempt to get a Camera instance
        }
        catch (Exception e){
            // Camera is not available (in use or does not exist)
            Log.e("mainactivitu", e.getLocalizedMessage());
        }
        return c; // returns null if camera is unavailable
    }

    @Override
    public void newBitmap(Bitmap bitmap) {
        if (!analisando) {
            analisando = true;
            FirebaseVisionImage image = FirebaseVisionImage.fromBitmap(bitmap);
            FirebaseVisionFaceDetector detector =
                    FirebaseVision.getInstance().getVisionFaceDetector(options);

            detector.detectInImage(image).addOnSuccessListener(
                    new OnSuccessListener<List<FirebaseVisionFace>>() {
                        @Override
                        public void onSuccess(List<FirebaseVisionFace> firebaseVisionFaces) {
                            //Log.e("facedetector", "success: " + firebaseVisionFaces.size());
                            for (FirebaseVisionFace face : firebaseVisionFaces) {
                                if (face.getSmilingProbability() != FirebaseVisionFace.UNCOMPUTED_PROBABILITY) {
                                    float smileProb = face.getSmilingProbability();

                                    if (smileProb > 0.85){
                                        Log.e("probability", "smile: " + smileProb);
                                        Call<ReturnParser> repos = LifeCycle.service.stopAlarm();
                                        repos.enqueue(new Callback<ReturnParser>() {
                                            @Override
                                            public void onResponse(retrofit2.Call<ReturnParser> call, Response<ReturnParser> response) {
                                                Log.e("resposta", "sucesso? " + response.isSuccessful());
                                            }

                                            @Override
                                            public void onFailure(retrofit2.Call<ReturnParser> call, Throwable t) {
                                                Log.e("resposta", "erro: " + t.getLocalizedMessage());
                                            }
                                        });
                                    }
                                }
                            }
                            analisando = false;
                        }
                    })
                    .addOnFailureListener(new OnFailureListener() {
                        @Override
                        public void onFailure(@NonNull Exception e) {
                            // Task failed with an exception
                            // ...
                            analisando = false;
                        }
                    });
        }
    }
}
