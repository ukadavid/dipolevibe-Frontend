
export const stopRecordingAfterOneMinute = setTimeout(() => {
    console.log("Recording stopped after 1 minute.");
    // eslint-disable-next-line no-undef
    stopRecording();
  }, 60000); 
  