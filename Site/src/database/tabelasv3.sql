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
(1, 'Classico'),
(2, 'Aço'),
(3, 'Sete Cordas'),
(4, 'Eletrico'),
(5, 'Telecaster'),
(6, 'Les Paul'),
(7, 'StratoCaster'),
(8, 'Flying V');
select*from instrumento;


create table instrumento_usuario(
fkInstrumento int,
fkUsuario int, 


foreign key (fkInstrumento) references instrumento(idInstrumento),
foreign key  (fkUsuario) references usuario(idUsuario)

);



select*from instrumento_usuario ;

select count(fkInstrumento) from instrumento_usuario where fkInstrumento = 5;
