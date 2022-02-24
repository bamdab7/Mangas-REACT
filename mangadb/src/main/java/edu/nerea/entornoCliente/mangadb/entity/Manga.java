package edu.nerea.entornoCliente.mangadb.entity;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="manga")
public class Manga {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String titulo;
	private String genero;
	private String saga;
	private BigDecimal precio;
	private String imagen;
	
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(name="mangaautor", joinColumns= @JoinColumn(name="idmanga"),
	inverseJoinColumns = @JoinColumn(name="idautor"))
	private List<Autor> autores;
	
	public Manga() {
		super();
	}
	public Manga(Integer id, String titulo, String genero, String saga, BigDecimal precio, String imagen) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.genero = genero;
		this.saga = saga;
		this.precio = precio;
		this.imagen = imagen;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getGenero() {
		return genero;
	}
	public void setGenero(String genero) {
		this.genero = genero;
	}
	public String getSaga() {
		return saga;
	}
	public void setSaga(String saga) {
		this.saga = saga;
	}
	public BigDecimal getPrecio() {
		return precio;
	}
	public void setPrecio(BigDecimal precio) {
		this.precio = precio;
	}
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	
	public List<Autor> getAutores() {
		return autores;
	}
	public void setAutores(List<Autor> autores) {
		this.autores = autores;
	}
	@Override
	public String toString() {
		return "Manga [id=" + id + ", titulo=" + titulo + ", genero=" + genero + ", saga=" + saga + ", precio=" + precio
				+ ", imagen=" + imagen + "]";
	}
	
	
	
	
	
	
}
