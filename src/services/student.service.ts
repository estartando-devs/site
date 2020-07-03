export const getStudent = () => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve();
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
