/*
Navicat MySQL Data Transfer

Source Server         : ffz
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : goodslsit

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 17:05:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `styles` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('WAT2112.BA0950', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13300', '../img/g1.jpg', '黑色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0951', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13313', '../img/g2.jpg', '黑色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0952', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13323', '../img/g3.jpg', '黑色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0953', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13333', '../img/g4.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0954', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '1333', '../img/g5.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0955', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13343', '../img/g6.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0956', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13353', '../img/g7.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0957', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13363', '../img/g8.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0958', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13373', '../img/g9.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0959', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13383', '../img/g10.jpg', '黑色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09510', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13393', '../img/g11.jpg', '黑色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09511', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '133103', '../img/g12.jpg', '黑色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09512', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13319', '../img/g13.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09513', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13345', '../img/g14.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09514', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13389', '../img/g15.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09515', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '133190', '../img/g16.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09516', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '133321', '../img/g17.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09517', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13396', '../img/g18.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09518', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13367', '../img/g19.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09519', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13363', '../img/g20.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09520', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13395', '../img/g21.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09521', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13394', '../img/g22.jpg', '黑色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09522', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13326', '../img/g23.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09523', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13300', '../img/g24.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09524', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13340', '../img/g25.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09525', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13380', '../img/g26.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09526', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13328', '../img/g27.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09527', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13338', '../img/g1.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09528', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13348', '../img/g11.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09529', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13373', '../img/g25.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09530', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13311', '../img/g14.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09531', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13322', '../img/g17.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09532', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13344', '../img/g18.jpg', '黑色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09533', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13347', '../img/g19.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09534', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13341', '../img/g12.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09535', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13312', '../img/g23.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09536', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13309', '../img/g26.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09537', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13385', '../img/g23.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09538', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13384', '../img/g21.jpg', '黑色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09539', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13315', '../img/g20.jpg', '黑色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0940', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13300', '../img/g1.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0941', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13313', '../img/g2.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0942', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13323', '../img/g3.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0943', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13333', '../img/g4.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0943', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13444', '../img/g8.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0945', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13343', '../img/g6.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0946', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13353', '../img/g7.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0947', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13363', '../img/g8.jpg', '银色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0948', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13373', '../img/g9.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA0949', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13383', '../img/g10.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09550', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13393', '../img/g11.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09551', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '133103', '../img/g12.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09552', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13319', '../img/g13.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09553', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13345', '../img/g14.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09554', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13389', '../img/g15.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09555', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '133190', '../img/g16.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09556', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '133321', '../img/g17.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09557', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '1396', '../img/g18.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09558', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13367', '../img/g19.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09559', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13363', '../img/g20.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09560', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13395', '../img/g21.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09561', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13394', '../img/g22.jpg', '黑色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09562', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13326', '../img/g23.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09563', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13333', '../img/g24.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09564', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13340', '../img/g25.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09565', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13380', '../img/g26.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09566', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13328', '../img/g27.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09567', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13338', '../img/g1.jpg', '银色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09568', 'TAG Heuer/泰格豪雅林肯系列自动机械男式腕表', '13348', '../img/g11.jpg', '黑色', '男式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09569', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13362', '../img/g13.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09570', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13311', '../img/g14.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09571', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13322', '../img/g17.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09572', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13344', '../img/g18.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09573', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13347', '../img/g19.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09574', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13341', '../img/g12.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09575', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13312', '../img/g23.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09576', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13309', '../img/g26.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09577', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13385', '../img/g23.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09578', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13384', '../img/g21.jpg', '黑色', '女式');
INSERT INTO `goodslist` VALUES ('WAT2112.BA09579', 'TAG Heuer/泰格豪雅林肯系列自动机械女式腕表', '13315', '../img/g20.jpg', '黑色', '女式');

-- ----------------------------
-- Table structure for zhuce
-- ----------------------------
DROP TABLE IF EXISTS `zhuce`;
CREATE TABLE `zhuce` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuce
-- ----------------------------
INSERT INTO `zhuce` VALUES ('1', '13413618934', 'e97d0a64ceab9b75e9407bbb0e6f293d');
INSERT INTO `zhuce` VALUES ('3', '13413618931', 'e97d0a64ceab9b75e9407bbb0e6f293d');
INSERT INTO `zhuce` VALUES ('4', '13413618912', '6af93fa45cfc39e697ee658d2dc8c25f');
INSERT INTO `zhuce` VALUES ('6', '13432886936', '6af93fa45cfc39e697ee658d2dc8c25f');
INSERT INTO `zhuce` VALUES ('7', '13413618920', 'af8f9dffa5d420fbc249141645b962ee');
SET FOREIGN_KEY_CHECKS=1;
