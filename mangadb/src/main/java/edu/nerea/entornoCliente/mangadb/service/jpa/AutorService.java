package edu.nerea.entornoCliente.mangadb.service.jpa;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.nerea.entornoCliente.mangadb.entity.Autor;
import edu.nerea.entornoCliente.mangadb.repository.AutorRepository;
import edu.nerea.entornoCliente.mangadb.service.IAutorService;

@Service
public class AutorService implements IAutorService {

	@Autowired
	private AutorRepository repoAutor;
	
	@Override
	public List<Autor> buscarAutores() {
		return repoAutor.findAll();
	}


	@Override
	public List<Autor> filtrarPorNombre(String nombre) {
		return repoAutor.filtrarPorNombre(nombre);
	}


	@Override
	public Optional<Autor> filtrarPorId(int id) {
		return repoAutor.findById(id);
	}

}
