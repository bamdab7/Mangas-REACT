package edu.nerea.entornoCliente.mangadb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.nerea.entornoCliente.mangadb.entity.Autor;

public interface AutorRepository extends JpaRepository<Autor, Integer> {

}
