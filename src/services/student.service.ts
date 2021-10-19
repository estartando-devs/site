export const getStudent = () => new Promise((resolve, reject) => {
  try {
    resolve();
  } catch (error) {
    console.log(error);
    reject(error);
  }
});
