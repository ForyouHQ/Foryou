/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE = @@TIME_ZONE */;
/*!40103 SET TIME_ZONE = '+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0 */;
/*!40101 SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES = @@SQL_NOTES, SQL_NOTES = 0 */;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task`
(
    `id`            bigint                                 NOT NULL AUTO_INCREMENT,
    `version`       bigint                                 NOT NULL DEFAULT '0',
    `category`      enum ('TASK1','TASK2','TASK3','OTHER') NOT NULL,
    `creation_date` datetime(6)                            NOT NULL,
    `description`   varchar(255) DEFAULT NULL,
    `price`         decimal(38, 2)                         NOT NULL,
    `title`         varchar(255) DEFAULT NULL,
    `user_id`       bigint                                 NOT NULL,
    PRIMARY KEY (`id`),
    KEY `FK2hsytmxysatfvt0p1992cw449` (`user_id`),
    CONSTRAINT `FK2hsytmxysatfvt0p1992cw449` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--


--
-- Table structure for table `task_contact_info`
--

DROP TABLE IF EXISTS `task_contact_info`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_contact_info`
(
    `id`                  bigint NOT NULL AUTO_INCREMENT,
    `version`             bigint NOT NULL DEFAULT '0',
    `city`                varchar(255) DEFAULT NULL,
    `house_number`        varchar(255) DEFAULT NULL,
    `house_number_suffix` varchar(255) DEFAULT NULL,
    `postal_code`         varchar(255) DEFAULT NULL,
    `street`              varchar(255) DEFAULT NULL,
    `email`               varchar(255) DEFAULT NULL,
    `phone`               varchar(255) DEFAULT NULL,
    `task_id`             bigint NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_hugho2mc2g01stgmx6w91qbxg` (`task_id`),
    UNIQUE KEY `UK_tqf61dyuwsy3g1k0moct5kfci` (`email`),
    CONSTRAINT `FK7ryyug9dl7yuxp34af24qwggr` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_contact_info`
--


--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user`
(
    `id`              bigint      NOT NULL AUTO_INCREMENT,
    `version`         bigint      NOT NULL DEFAULT '0',
    `creation_date`   datetime(6) NOT NULL,
    `email`           varchar(255) DEFAULT NULL,
    `first_name`      varchar(255) DEFAULT NULL,
    `last_name`       varchar(255) DEFAULT NULL,
    `last_name_affix` varchar(255) DEFAULT NULL,
    `password`        varchar(255) DEFAULT NULL,
    `phone`           varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--


--
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_address`
(
    `id`                  bigint NOT NULL AUTO_INCREMENT,
    `version`             bigint NOT NULL DEFAULT '0',
    `city`                varchar(255) DEFAULT NULL,
    `house_number`        varchar(255) DEFAULT NULL,
    `house_number_suffix` varchar(255) DEFAULT NULL,
    `postal_code`         varchar(255) DEFAULT NULL,
    `street`              varchar(255) DEFAULT NULL,
    `user_id`             bigint NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_kfu0161nvirkey6fwd6orucv7` (`user_id`),
    CONSTRAINT `FKk2ox3w9jm7yd6v1m5f68xibry` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

/*!40103 SET TIME_ZONE = @OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE = @OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT = @OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS = @OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION = @OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES = @OLD_SQL_NOTES */;

-- Dump completed on 2024-05-10 15:59:45
