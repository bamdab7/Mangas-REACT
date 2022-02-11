package edu.nerea.entornoCliente.mangadb.service.jpa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.nerea.entornoCliente.mangadb.entity.Manga;
import edu.nerea.entornoCliente.mangadb.repository.MangaRepository;
import edu.nerea.entornoCliente.mangadb.service.IMangaService;

@Service
public class MangaService implements IMangaService {

	
	@Autowired
	private MangaRepository repoManga;
	
	@Override
	public List<Manga> buscarMangas() {
		return repoManga.findAll();
	}

	@Override
	public List<Manga> filtrarPorGenero(String genero) {
		return repoManga.filtrarGenero(genero);
	}

	@Override
	public List<Manga> filtrarPorTitulo(String titulo) {
		return repoManga.filtrarTitulo(titulo);
	}

}
