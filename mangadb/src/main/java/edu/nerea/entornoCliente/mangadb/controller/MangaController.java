package edu.nerea.entornoCliente.mangadb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.nerea.entornoCliente.mangadb.entity.Manga;
import edu.nerea.entornoCliente.mangadb.service.IMangaService;

@RestController
@RequestMapping("/manga")
public class MangaController {

		@Autowired
		private IMangaService serviceManga;
		
		@GetMapping("/mangas")
		public List<Manga> buscarMangas(){
			return serviceManga.buscarMangas();
		}
	
		@GetMapping("/genero/{genero}")
		public List<Manga> filtrarPorGenero(@PathVariable("genero")String genero){
			return serviceManga.filtrarPorGenero(genero);
		}
		
		@GetMapping("/titulo/{titulo}")
		public List<Manga> filtrarPorTitulo(@PathVariable("titulo")String titulo){
			return serviceManga.filtrarPorTitulo(titulo);
		}
}
