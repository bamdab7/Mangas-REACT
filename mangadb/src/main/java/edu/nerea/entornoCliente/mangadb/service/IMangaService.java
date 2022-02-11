package edu.nerea.entornoCliente.mangadb.service;

import java.util.List;

import edu.nerea.entornoCliente.mangadb.entity.Manga;

public interface IMangaService {

	List<Manga> buscarMangas();
	List<Manga> filtrarPorGenero(String genero);
	List<Manga> filtrarPorTitulo(String titulo);
}
