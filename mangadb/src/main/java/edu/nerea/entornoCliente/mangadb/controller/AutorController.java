package edu.nerea.entornoCliente.mangadb.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.nerea.entornoCliente.mangadb.entity.Autor;
import edu.nerea.entornoCliente.mangadb.service.IAutorService;

@RestController
@RequestMapping("/autor")
@CrossOrigin("*")
public class AutorController {

		@Autowired
		private IAutorService serviceAutor;
		
		@GetMapping("/autores")
		public List<Autor> buscarAutores(){
			return serviceAutor.buscarAutores();
		}
		
		@GetMapping("/nombre/{nombre}")
		public List<Autor> filtrarPorNombre(@PathVariable("nombre")String nombre){
			return serviceAutor.filtrarPorNombre(nombre);
		}
		
		@GetMapping("/detalle/{id}")
		public Optional<Autor> buscarPorId(@PathVariable("id")int id){
			return serviceAutor.filtrarPorId(id);
		}
}	
