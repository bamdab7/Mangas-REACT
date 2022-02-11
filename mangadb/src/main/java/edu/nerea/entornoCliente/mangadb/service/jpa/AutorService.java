package edu.nerea.entornoCliente.mangadb.service.jpa;

import java.util.List;

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

}
