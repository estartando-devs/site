export const devsApproved: string[] = [
  "Breno Nunes",
  "Alan Araujo",
  "Yago Valluce",
  "Jarilson Jaja",
  "Angelical Lima",
  "Xanatas Pinto",
  "Frederico Português",
  "Ana Carolina",
];

export const designersApproved: string[] = [
  "Adrielle Bittencourt",
  "Rebecca Pantoja",
  "Amanda Garcia",
  "Xanatas Pinto",
  "Frederico Português",
  "Jarilson Jaja",
  "Angelino Lima",
];

interface IStudentsApproved<T> {
  [key: string]: T;
}

export const studentsApproved: IStudentsApproved<string[]> = {
  dev: devsApproved,
  design: designersApproved,
};

export const getApprovedList = (list: string) => studentsApproved[list];
