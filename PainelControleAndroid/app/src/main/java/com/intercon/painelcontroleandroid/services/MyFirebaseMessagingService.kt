package com.intercon.painelcontroleandroid.services

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.graphics.BitmapFactory
import android.graphics.Color
import android.media.RingtoneManager
import android.util.Log
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.R
import com.google.firebase.messaging.RemoteMessage
import com.intercon.painelcontroleandroid.activities.MainActivity
import com.intercon.painelcontroleandroid.activities.ThiefActivity
import java.util.*

/**
 * Created by ricardoogliari on 9/30/18.
 */

class MyFirebaseMessagingService : FirebaseMessagingService() {

    override fun onMessageReceived(remoteMessage: RemoteMessage?) {
        Log.e("chegou", "chegouuuuuu");

        var map = remoteMessage?.data

        map?.let {
            //notification to energy
            if (it.containsKey("state")) {
                var state = it.get("state")

                val context = this.applicationContext
                var notificationManager: NotificationManager = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
                val notifyIntent = Intent(this, MainActivity::class.java)

                val title = "Aviso do Servidor"
                val message = if (state == "0") "Faltou luz..." else "Luz restabelecida"

                notifyIntent.putExtra("title", title)
                notifyIntent.putExtra("message", message)
                notifyIntent.putExtra("notification", true)

                notifyIntent.flags = Intent.FLAG_ACTIVITY_NEW_TASK

                val pendingIntent = PendingIntent.getActivity(context, 0, notifyIntent, PendingIntent.FLAG_UPDATE_CURRENT)
                val res = this.resources
                val uri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION)

                var drawableIcon = com.intercon.painelcontroleandroid.R.drawable.ic_power_plug
                if (state == "0")
                    drawableIcon = com.intercon.painelcontroleandroid.R.drawable.ic_power_plug_off

                val mNotification = Notification.Builder(this)
                        // Set the intent that will fire when the user taps the notification
                        .setContentIntent(pendingIntent)
                        .setSmallIcon(drawableIcon)
                        .setLargeIcon(BitmapFactory.decodeResource(res, com.intercon.painelcontroleandroid.R.mipmap.ic_launcher))
                        .setAutoCancel(true)
                        .setPriority(Notification.PRIORITY_MAX)
                        .setContentTitle(title)
                        .setStyle(Notification.BigTextStyle()
                                .bigText(message))
                        .setSound(uri)
                        .setContentText(message).build()

                if (state == "0"){

                }

                notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
                // mNotificationId is a unique int for each notification that you must define
                notificationManager.notify(1, mNotification)

            } else if (it.containsKey("rack")) {
                var intent = Intent(this, ThiefActivity::class.java);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                startActivity(intent)
            }
        }
    }

}
