CREATE DATABASE  IF NOT EXISTS `mangadb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `mangadb`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mangadb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autor`
--

DROP TABLE IF EXISTS `autor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autor` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `ciudad` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autor`
--

LOCK TABLES `autor` WRITE;
/*!40000 ALTER TABLE `autor` DISABLE KEYS */;
INSERT INTO `autor` VALUES (1,'Eiichirō Oda','Kumamoto'),(2,'Tsugumi Ōhba','Tokio'),(3,'Suu Morishita','Nagano'),(4,'Michiko Yokote','Osaka'),(5,'Akira Toriyama','Nagoya'),(6,'Kyōko Mizuki','Tokio'),(7,'Gō Nagai','Wajima'),(8,'Gōshō Aoyama','Hokuei'),(9,'Naoko Takeuchi','Kōfu'),(10,'Hajime Isayama','Hita'),(11,'Mine Yoshizaki','Isahaya'),(12,'Haruichi Furudate','Karumai'),(13,'Tadatoshi Fujimaki','Tokio'),(14,'Masahito Watari','Osaka');
/*!40000 ALTER TABLE `autor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manga`
--

DROP TABLE IF EXISTS `manga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manga` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `genero` varchar(45) NOT NULL,
  `saga` varchar(255) NOT NULL,
  `precio` decimal(3,2) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `destacado` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manga`
--

LOCK TABLES `manga` WRITE;
/*!40000 ALTER TABLE `manga` DISABLE KEYS */;
INSERT INTO `manga` VALUES (1,'Por quien tocan las campanas','Aventura','One Piece',7.99,'https://m.media-amazon.com/images/P/B09T8W3J5Q.01._SCLZZZZZZZ_SX500_.jpg',0),(2,'Las estrellas llegan al escenario','Aventura','One Piece',7.99,'https://images-na.ssl-images-amazon.com/images/I/61pR0ayzwGL._SX329_BO1,204,203,200_.jpg',0),(3,'Death Note','Misterio','Death Note',9.99,'https://images-na.ssl-images-amazon.com/images/I/51zzrSR5E1L._SY264_BO1,204,203,200_QL40_ML2_.jpg',1),(4,'Signos de afecto','Romance','Signos de Afecto',8.55,'https://images-na.ssl-images-amazon.com/images/I/51pNYLlQ3LL._SX347_BO1,204,203,200_.jpg',0),(5,'Mermaid Melody 1','Romance','Mermaid Melody',8.55,'https://images-na.ssl-images-amazon.com/images/I/51ZC6thxCfL._SX354_BO1,204,203,200_.jpg',1),(6,'Mermaid Melody 2','Romance','Mermaid Melody',8.55,'https://images-na.ssl-images-amazon.com/images/I/512T8RV3KAL._SX331_BO1,204,203,200_.jpg',0),(7,'Dragon Ball Super 15','Aventura','Dragon Ball ',7.55,'https://images-na.ssl-images-amazon.com/images/I/51-+S6UQH5L._SX310_BO1,204,203,200_.jpg',0),(8,'Candy Candy','Romance','Candy Candy',6.95,'https://images-na.ssl-images-amazon.com/images/I/5142i2iabKS._SY264_BO1,204,203,200_QL40_ML2_.jpg',0),(9,'Mazinger Z','Aventura','Mazinger Z',9.99,'https://images-na.ssl-images-amazon.com/images/I/41xle2KuudL._SX348_BO1,204,203,200_.jpg',1),(10,'Detective Conan','Misterio','Detective Conan',9.99,'https://m.media-amazon.com/images/P/B084D3V6SB.01._SCLZZZZZZZ_SX500_.jpg',0),(11,'Sailor Moon','Romance','Sailor Moon',9.99,'https://images-na.ssl-images-amazon.com/images/I/51rQQISM3yL._SX331_BO1,204,203,200_.jpg',0),(12,'Shingeki no Kyojin','Misterio','Shingeki no Kyojin',6.55,'https://images-na.ssl-images-amazon.com/images/I/51T+sKvrjzL._SX346_BO1,204,203,200_.jpg',1),(13,'Keroro 26','Comedia','Sargento Keroro',7.12,'https://images-na.ssl-images-amazon.com/images/I/515P-xuQ56L._SX323_BO1,204,203,200_.jpg',0),(14,'Haikyû!!','Deporte','Haikyû!!',7.55,'https://images-na.ssl-images-amazon.com/images/I/51ZBYSqpJSS._SX301_BO1,204,203,200_.jpg',0),(15,'Kuroko no Basket 8','Deporte','Kuroko no Basket',7.60,'https://images-na.ssl-images-amazon.com/images/I/51bZoeQiRXL._SX335_BO1,204,203,200_.jpg',0),(16,'Konosuba','Comedia','Konosuba',9.99,'https://images-na.ssl-images-amazon.com/images/I/51dXpdGMK8L._SX353_BO1,204,203,200_.jpg',1);
/*!40000 ALTER TABLE `manga` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mangaautor`
--

DROP TABLE IF EXISTS `mangaautor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mangaautor` (
  `idManga` int(3) NOT NULL,
  `idAutor` int(3) NOT NULL,
  PRIMARY KEY (`idManga`,`idAutor`),
  KEY `mangatoautor_idx` (`idAutor`),
  CONSTRAINT `autortomanga` FOREIGN KEY (`idManga`) REFERENCES `manga` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mangatoautor` FOREIGN KEY (`idAutor`) REFERENCES `autor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mangaautor`
--

LOCK TABLES `mangaautor` WRITE;
/*!40000 ALTER TABLE `mangaautor` DISABLE KEYS */;
INSERT INTO `mangaautor` VALUES (1,1),(2,1),(3,2),(4,3),(5,4),(6,4),(7,5),(8,6),(9,7),(10,8),(11,9),(12,10),(13,11),(14,12),(15,13),(16,14);
/*!40000 ALTER TABLE `mangaautor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-16 20:21:40
