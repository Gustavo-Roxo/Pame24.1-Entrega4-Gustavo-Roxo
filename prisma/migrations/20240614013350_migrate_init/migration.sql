-- CreateTable
CREATE TABLE "Funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "sexo" BOOLEAN NOT NULL,
    "data_nasciemnto" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Peca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "estoque" BOOLEAN NOT NULL,
    "id_registro" INTEGER NOT NULL,
    CONSTRAINT "Peca_id_registro_fkey" FOREIGN KEY ("id_registro") REFERENCES "Registro" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Registro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" TEXT NOT NULL,
    "tipo" BOOLEAN NOT NULL,
    "id_funcionario" INTEGER NOT NULL,
    CONSTRAINT "Registro_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Encomenda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "id_pedra_metal" INTEGER,
    "id_funcionario" INTEGER NOT NULL,
    CONSTRAINT "Encomenda_id_pedra_metal_fkey" FOREIGN KEY ("id_pedra_metal") REFERENCES "Pedra_Metal" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Encomenda_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pedra_Metal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Encomenda_id_pedra_metal_key" ON "Encomenda"("id_pedra_metal");
