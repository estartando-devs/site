export const devsApproved: string[] = [
  "Abraão Lincon Benites Dos Santos",
  "Ana Lívia Pascoal da Silva Araújo",
  "Daniel Leal Fagundes",
  "Danilo Lima de Azevedo",
  "Danilo Lima Dias",
  "Everton Reis",
  "Fernanda Gomes Barbosa do Nascimento Marques",
  "Guilherme Avila de Souza Cunha",
  "Guilherme de Ávila de Moura",
  "Jéssica Rosália Fernandes",
  "João Paulo Faria de Carvalho",
  "José Lucas Santos Estrela",
  "Lara Giuliana Lima dos Santos",
  "Luiz Eduardo Bronzeado Pessoa",
  "Lucas Lomeu Gomes",
  "Mateus O Vasconcelos",
  "Mayra Zanchett Manchein",
  "Vítor Ribeiro Guimarães Gomes",
  "Ana Paula Cirilo dos Santos",
  "Mateus Palhano da Silva",
  "Pedro Augusto Ferreira Silva",
  "Pedro Lucas da Gama Martins",
  "Pietra Nunes Tavares",
  "Rafaela de Albuquerque",
  "Rafael Pimentel Montezi",
  "Ramon Suzano Pinto",
  "Renato Aloisio Oliveira Canuto",
  "Sarah Costa de Abreu",
  "Stefany Vasconcelos de Sá",
  "Rodrigo Queiroz Yamagushi",
  "Ynara Oliveira de Sousa",
];

export const designersApproved: string[] = [
  "Gabriel Fernandes Silva",
  "Lucas Puglielli Parreiras Bastos",
  "Raphaela Benetello",
  "Fernand Raquel Lima dos Santos",
  "Allan Christian Gadelha",
  "Júlia Sampaio Victor",
  "Luiz Henrique de Rosa",
  "Rosineide Santos da Silva",
  "Vítor Tavares Silva",
  "Iuri Veloso Felix",
  "Izabel laine Teixeira de Souza",
  "Leonardo Luiz da Silva",
  "Fabiana Rodrigues do Nascimento",
  "Anna Beatriz Nascimento Fonseca",
  "Caio Siqueira Molto dos Santos",
  "Anny Caroline da Silva Paula",
  "Magnólia Maria de Medeiros",
  "Antoniel Magalhães de Sousa",
  "Jhulya Guimarães Senra",
];

interface IStudentsApproved<T> {
  [key: string]: T;
}

export const studentsApproved: IStudentsApproved<string[]> = {
  dev: devsApproved,
  design: designersApproved,
};

export const getApprovedList = (list: string) => studentsApproved[list];
