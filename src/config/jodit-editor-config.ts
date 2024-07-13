/* eslint-disable @typescript-eslint/no-explicit-any */
export const joditConfig = {
  uploader: {
    url: `https://fitness-accessories-server-flame.vercel.app/api/v1/uploads`,
    format: "json",
    prepareData: function (data: any) {
      return data;
    },
    isSuccess: (resp: any) => !resp.error,
    process: (resp: any) => {
      console.log("Upload response:", resp); // Debugging log
      return {
        files: resp.data && resp.data.location ? [resp.data.location] : [],
        path: resp.data && resp.data.location,
        error: resp.error,
        msg: resp.msg,
      };
    },
  },
  height: 500,
  toolbarAdaptive: false, // Disable adaptive toolbar
  spellcheck: false, // Disable spellcheck if not needed
  disablePlugins: ["speechRecognition"], // Example of disabling specific plugins
};
