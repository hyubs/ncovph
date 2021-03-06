
import * as functions from 'firebase-functions';
import express from '../express';

export default functions
  .region('us-central1')
  .runWith({
    memory: '256MB',
    timeoutSeconds: 30,
  })
  .https.onRequest(express);
