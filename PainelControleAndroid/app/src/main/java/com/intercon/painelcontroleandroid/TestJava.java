package com.intercon.painelcontroleandroid;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.ValueEventListener;

import org.json.JSONObject;

/**
 * Created by ricardoogliari on 10/3/18.
 */

public class TestJava {

    public void test(){
        Core.ref.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                JSONObject object = dataSnapshot.getValue(JSONObject.class);
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });
    }

}
