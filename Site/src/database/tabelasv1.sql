create database projetoIndividual ;

use projetoIndividual;

create table usuario (
idUsuario int primary key auto_increment,
usuario varchar(45),
email varchar(45),
senha varchar(45),
musico char(3));

select*from usuario;

create table instrumento (
idInstrumento int primary key auto_increment,
nome varchar(45));

select*from instrumento;