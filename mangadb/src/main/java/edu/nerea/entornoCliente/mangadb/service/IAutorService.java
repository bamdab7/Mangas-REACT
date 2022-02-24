package edu.nerea.entornoCliente.mangadb.service;

import java.util.List;
import java.util.Optional;

import edu.nerea.entornoCliente.mangadb.entity.Autor;  //aqui creo los metodos que vaya a utilizar

public interface IAutorService {
	
	List<Autor> buscarAutores();
	List<Autor> filtrarPorNombre(String nombre);
	Optional<Autor> filtrarPorId(int id);
}
