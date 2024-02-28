-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema usuariosds
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema usuariosds
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `usuariosds` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `usuariosds` ;

-- -----------------------------------------------------
-- Table `usuariosds`.`paises`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `usuariosds`.`paises` (
  `id_paises` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL,
  `codigo_iso` VARCHAR(5) NOT NULL,
  `capital` VARCHAR(20) NULL DEFAULT NULL,
  `idioma_principal` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id_paises`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `usuariosds`.`usuariosds`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `usuariosds`.`usuariosds` (
  `id_usuarios` INT NOT NULL AUTO_INCREMENT,
  `NombreUsuario` VARCHAR(255) NOT NULL,
  `Contrasena` VARCHAR(255) NOT NULL,
  `Pais_id` INT NOT NULL,
  PRIMARY KEY (`id_usuarios`),
  INDEX `paisid_idx` (`Pais_id` ASC) VISIBLE,
  CONSTRAINT `pais_id`
    FOREIGN KEY (`Pais_id`)
    REFERENCES `usuariosds`.`paises` (`id_paises`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
