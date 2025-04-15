// API Aplication Programming Interface
import { PrismaClient } from "@prisma/client"; // permite interagir com o bando de dados do prisma ORM
import cors from "cors"; // importando pacote cors para habiltar um aplicação node.js
import express from "express";// é uma forma de importar o modulo express

const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.use(cors());


// rota para buscar um novo usuário
app.get("/usuarios/:id", async (req, res) => {
     const users = await prisma.user.findFirst({

          where: {
               id: req.params.id,
          }
     });
     res.status(200).json(users);
});

app.get("/usuarios", async (req, res) => {



     const users = await prisma.user.findMany();
     res.status(200).json(users);
});

// rota para criar um novo usuario
app.post("/usuarios", async (req, res) => {
     console.log(req.body);
     const { name, age, email } = req.body;

     if (!name || !age || !email) {
          return res.status(400).json({ error: "Todos os campos são obrigatórios" });
     }

     try {
          const newuser = await prisma.user.create({
               data: {
                    name,
                    age: parseInt(age),
                    email
               },
          });
          res.status(200).json(user);
     } catch (error) {
     }
});

// rota para atualizar um novo usuario
app.put("/usuarios/:id", async (req, res) => {
     req.params.id;
     const user = await prisma.user.update({
          where: {
               id: req.params.id,
          },

          data: {
               email: req.body.email,
               age: req.body.age,
               name: req.body.name,
          },
     });

     res.status(200).json(user);
});

// rota para deletar um novo usuario
app.delete("/usuarios/:id", async (req, res) => {

     await prisma.user.delete({
          where: {
               id: req.params.id,
          },
     });

     res.status(200).json({ message: "Usuário deletado com sucesso!" });
});


app.listen(3000, () => {
     console.log("Servidor rodando na porta 3000");
});



/*
Post Creat de Criar
Delete deletar
Put Update atualizar
get pull buscar
*/
// req é a requisição e o res é a resposta são o metodo do express 
// http://localhost:3000/usuarios
//admin123
//emersonfilgueira8:<db_password>@users.zg1z4.mongodb.net/?



