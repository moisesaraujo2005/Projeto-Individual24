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
insert into instrumento values 
(1, 'classico'),
(2, 'aço'),
(3, 'Sete Cordas'),
(4, 'Guitarra');

select * from usuario;
select*from instrumento;

create table instrumento_usuario (
fkInstrumento int,
fkUsuario int,
foreign key (fkInstrumento) references instrumento(idInstrumento),
foreign key (fkUsuario) references usuario(idUsuario));

insert into instrumento_usuario (fkInstrumento, fkInstrumento) values
(2,2);
select*from instrumento_usuario;