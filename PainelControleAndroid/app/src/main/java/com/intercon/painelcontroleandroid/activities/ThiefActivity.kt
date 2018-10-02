package com.intercon.painelcontroleandroid.activities

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import com.intercon.painelcontroleandroid.R
import android.support.annotation.NonNull
import com.google.android.gms.tasks.OnFailureListener
import com.google.firebase.storage.FileDownloadTask
import com.google.android.gms.tasks.OnSuccessListener
import com.intercon.painelcontroleandroid.Core
import java.io.File
import com.firebase.ui.storage.images.FirebaseImageLoader
import com.bumptech.glide.Glide
import com.bumptech.glide.load.engine.DiskCacheStrategy
import com.bumptech.glide.request.RequestListener
import com.google.firebase.storage.StorageReference
import kotlinx.android.synthetic.main.activity_thief.*
import com.google.firebase.storage.StorageMetadata
import java.text.SimpleDateFormat
import java.util.*


class ThiefActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_thief)

        /*val localFile = File.createTempFile("images", "jpg")
        Core.mStorageRef.child("images/selfie.jpg").getFile(localFile)
                .addOnSuccessListener(OnSuccessListener<FileDownloadTask.TaskSnapshot> {
                    // Successfully downloaded data to local file
                    // ...

                }).addOnFailureListener(OnFailureListener {
                    // Handle failed download
                    // ...
                })*/

        Glide.with(this /* context */)
                .using<StorageReference>(FirebaseImageLoader())
                .load(Core.mStorageRef.child("images/selfie.jpg"))
                .diskCacheStrategy(DiskCacheStrategy.NONE)
                .into(imgSelfie)

        val forestRef = Core.mStorageRef.child("images/selfie.jpg")

        forestRef.getMetadata().addOnSuccessListener(OnSuccessListener<StorageMetadata> {
            // Metadata now contains the metadata for 'images/forest.jpg'
            val dateFormat = SimpleDateFormat("dd/MM/yyyy HH:mm:ss")
            val date = Date(it.creationTimeMillis)
            txtMetadata.text = "Capturada em: " + dateFormat.format(date)
        }).addOnFailureListener(OnFailureListener {
            // Uh-oh, an error occurred!
        })
    }
}
