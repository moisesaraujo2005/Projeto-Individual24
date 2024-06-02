create database projetoIndividual ;
	
use projetoIndividual;

create table usuario (
idUsuario int primary key auto_increment,
usuario varchar(45),
email varchar(45),
senha varchar(45),
musico char(3));


select count(musico) from usuario where musico='nao';
select*from usuario;


create table instrumento (
idInstrumento int primary key auto_increment,
nome varchar(45),
tipo char(10));

insert into instrumento values 
(1, 'Classico', 'Violão'),
(2, 'Aço', 'Violão'),
(3, 'Sete Cordas', 'Violão'),
(4, 'Eletrico', 'Violão'),
(5, 'Telecaster', 'Guitarra'),
(6, 'Les Paul', 'Guitarra'),
(7, 'StratoCaster', 'Guitarra'),
(8, 'Flying V', 'Guitarra');
select*from instrumento;


create table instrumento_usuario(
fkInstrumento int,
fkUsuario int, 


foreign key (fkInstrumento) references instrumento(idInstrumento),
foreign key  (fkUsuario) references usuario(idUsuario),
hora time 
);



select*from instrumento_usuario ;
select hora as horavotada from instrumento_usuario order by hora desc limit 1;
select count(fkInstrumento) from instrumento_usuario join instrumento on idInstrumento=fkInstrumento where instrumento.tipo = 'Guitarra';
select count(fkInstrumento) from instrumento_usuario where fkInstrumento in (1,2,3,4);
select count(fkInstrumento) from instrumento_usuario where fkInstrumento = 5;
select count(fkinstrumento) from instrumento_usuario;
select hora from instrumento_usuario order by hora desc limit 1;

select avg(count(fkInstrumento)) from instrumento_usuario ;