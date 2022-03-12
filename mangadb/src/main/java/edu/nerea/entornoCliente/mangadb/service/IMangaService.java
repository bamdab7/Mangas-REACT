package edu.nerea.entornoCliente.mangadb.service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import edu.nerea.entornoCliente.mangadb.entity.Manga;

public interface IMangaService { //aqui creo los metodos que vaya a utilizar
	

	List<Manga> buscarMangas();
	List<Manga> filtrarPorGenero(String genero);
	List<Manga> filtrarPorTitulo(String titulo);
	Optional<Manga> buscarPorId(int id);
	List<Manga> filtrarPorPrecioASC();
	List<Manga> filtrarPorPrecioDESC();
	List<Manga> buscarDestacado();
}	
