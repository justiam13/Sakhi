import * as tf from '@tensorflow/tfjs';
import * as facemesh from '@tensorflow-models/facemesh';

async function loadModel() {
  const model = await facemesh.load();
  return model;
}

const model = await loadModel();