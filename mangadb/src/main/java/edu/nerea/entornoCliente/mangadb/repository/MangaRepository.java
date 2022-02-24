package edu.nerea.entornoCliente.mangadb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.nerea.entornoCliente.mangadb.entity.Manga;

public interface MangaRepository extends JpaRepository<Manga, Integer> {
	
	@Query("SELECT m FROM Manga m WHERE m.genero LIKE %?1%")
	public List<Manga> filtrarGenero(String genero);
	
	@Query("SELECT m FROM Manga m WHERE m.titulo LIKE %?1%")
	public List<Manga> filtrarTitulo(String titulo);
	
	@Query("SELECT m FROM Manga m ORDER BY m.precio ASC")
	public List<Manga> filtrarPorPrecioASC();
	
	@Query("SELECT m FROM Manga m ORDER BY m.precio DESC")
	public List<Manga> filtrarPorPrecioDESC();
}
