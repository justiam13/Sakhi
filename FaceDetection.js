import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import * as blazeface from '@tensorflow-models/blazeface';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';
import { fetchLocation, storeEmotionAndLocation, predictEmotion } from './emotionDetectionUtils';

const FaceDetection = () => {
  const cameraRef = useRef(null);
  const [classifier, setClassifier] = useState(null);

  const runFaceDetection = async () => {
    const faceModel = await blazeface.load();
    const mobilenetModel = await mobilenet.load();
    const knn = knnClassifier.create();
    setClassifier(knn);
    console.log('Models loaded.');

    setInterval(() => {
      detect(faceModel, mobilenetModel, knn);
    }, 1000); // Adjust interval as needed
  };

  const detect = async (faceModel, mobilenetModel, knn) => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      const img = new Image();
      img.src = uri;

      img.onload = async () => {
        const videoWidth = img.width;
        const videoHeight = img.height;

        const faces = await faceModel.estimateFaces(img, false);

        if (faces.length > 0) {
          const canvas = document.createElement('canvas');
          canvas.width = videoWidth;
          canvas.height = videoHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, videoWidth, videoHeight);

          faces.forEach(async (face) => {
            const [startX, startY, endX, endY] = face.topLeft.concat(face.bottomRight);
            const faceRegion = tf.image.cropAndResize(
              tf.browser.fromPixels(canvas),
              [[startY / videoHeight, startX / videoWidth, endY / videoHeight, endX / videoWidth]],
              [0],
              [224, 224]
            );

            const emotion = await predictEmotion(mobilenetModel, knn, faceRegion);

            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;
            ctx.strokeRect(startX, startY, endX - startX, endY - startY);
            ctx.font = '18px Arial';
            ctx.fillStyle = 'red';
            ctx.fillText(emotion.label, startX, startY - 10);

            const location = await fetchLocation();
            storeEmotionAndLocation(auth.currentUser.uid, emotion.label, location);
          });
        }
      };
    }
  };

  useEffect(() => {
    runFaceDetection();
  }, []);

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.front}
        captureAudio={false}
      />
      <Text style={styles.text}>Face Detection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  preview: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default FaceDetection;
