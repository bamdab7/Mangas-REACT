package edu.nerea.entornoCliente.mangadb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.nerea.entornoCliente.mangadb.entity.Autor;

public interface AutorRepository extends JpaRepository<Autor, Integer> {
	
	@Query("SELECT a FROM Autor a WHERE a.nombre LIKE %?1%")
	public List<Autor> filtrarPorNombre(String nombre);

}
