export const devsApproved: string[] = [
  "Pedro Lucas da Gama Martins",
  "Matheus Rodrigo Queiroz de Lima Filho",
  "Ellen Rodrigues de Oliveira Dutra",
  "José Fernando Ugoski Silveira",
  "Fernanda Gomes Barbosa do Nascimento Marques",
  "Ytalo William de Jesus da Gloria",
  "Guilherme de Ávila de Moura",
  "Thiago Castro Spada",
  "Wellington Fernandes Matias",
  "Ana Lívia Pascoal da Silva Araújo",
  "Diego Gomes Matheus",
  "Rafaela de Albuquerque",
  "Guilherme Avila de Souza Cunha",
  "Sarah Costa de Abreu",
  "Jó Sales de Medeiros Júnior",
  "Lara Giuliana Lima dos Santos",
  "Rodrigo Queiroz Yamagushi",
  "eduardo de oliveira moreira",
  "Luiz Eduardo Bronzeado Pessoa",
  "João Paulo Faria de Carvalho",
  "Thais Wemberlaine Dias Machado Rocha",
  "Lucas Lomeu Gomes",
  "José Lucas Santos Estrela",
  "Ana Paula Cirilo dos Santos",
  "Mayra Zanchett Manchein",
  "Gabriel da Silva de Sant'Anna",
  "Vítor Ribeiro Guimarães Gomes",
  "Ynara Oliveira de Sousa",
  "Lucas Gabriel da Silva Sampaio",
  "Pietra Nunes Tavares",
  "Stefany Vasconcelos de Sá",
  "Pedro Augusto Ferreira Silva",
  "Alexandre nunes brito",
  "Jéssica Rosália Fernandes",
  "Raffael Wagner Rolim Siqueira",
  "Mateus O Vasconcelos",
  "Danilo Lima de Azevedo",
  "Everton Reis",
  "Daniel Leal Fagundes",
  "Guilherme Teixeira Silva",
  "Ramon Suzano Pinto",
  "Thayane Gonçalo de Almeida",
  "Filipe Bizerra de Souza",
  "Giovani Buselli",
  "Abraão Lincon Benites Dos Santos",
  "Renato Aloisio Oliveira Canuto",
  "Mateus Palhano da Silva",
  "Danilo lima dias",
  "Tualan Pereira Santos",
  "Rafael Pimentel Montezi de Oliveira Lima",
];

export const designersApproved: string[] = [
  "Iuri Veloso Felix",
  "Raphaela Benetello",
  "Jhulya Guimarães senra",
  "Ana Clara Klippel",
  "Philipe Perete dos Santos",
  "Allan Christian Gadelha",
  "Larissa Nahan Santos Diniz Gadelha Dantas",
  "Poliana da Silva Telles",
  "Adria Menezes de Oliveira",
  "Lucas Puglielli Parreiras Bastos",
  "Abiner Abrahão do Lago",
  "Ariele Pereira Mendonça",
  "Rodrigo Pauletti",
  "Gabriel Fernandes Silva",
  "Vanessa de Carvalho Faria",
  "Diego Ramos Azevedo",
  "Mateus Oliveira de Souza",
  "Lucas Genesses Dias Bittencourt",
  "Anna Beatriz Nascimento Fonseca",
  "Anny Caroline da Silva Paula",
  "Lorrayne Costa de Carvalho",
  "Luan Zuchi Ribeiro",
  "Gabriel dos Anjos de Melo",
  "Antoniel Magalhães de Sousa",
  "Leonardo Luiz da Silva",
  "Leticia Assis Medeiros",
  "Christopher De Souza Freitas",
  "Fernanda Raquel Lima dos Santos",
  "Vítor Tavares Silva",
  "Caio Siqueira Molto dos Santos",
  "Carlos Alberto",
  "Magnólia Maria de Medeiros",
  "Izabel laine Teixeira de Souza",
  "Fernanda Ramos Azevedo",
  "Fabiana Rodrigues do Nascimento",
  "Thales augusto matins",
  "Luiz Henrique de Rosa",
  "Júlia Sampaio Victor",
  "Rosineide Santos da Silva",
];

interface IStudentsApproved<T> {
  [key: string]: T;
}

export const studentsApproved: IStudentsApproved<string[]> = {
  dev: devsApproved,
  design: designersApproved,
};

export const getApprovedList = (list: string) => studentsApproved[list];
