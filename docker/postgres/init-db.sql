create table us_sales_by_districts
(
  code varchar(32) not null,
  sales int,
  primary key(code)
);

INSERT INTO us_sales_by_districts (code, sales)
VALUES
('nv2', 10),
('il15', 10),
('mn6', 2),
('pa12', 3),
('wa3', 15),
('wa2', 7),
('fl18', 30),
('fl17', 3),
('ca20', 20),
('pa10', 1),
('ny14', 12),
('ny8', 7),
('ca49', 7),
('nc3', 10),
('ca52', 15),
('nd', 5),
('nm3', 1),
('co4', 3),
('az1', 8),
('de', 16),
('nv3', 1),
('pa11', 2),
('hi2', 22),
('ak', 2),
('ca46', 27),
('ca24', 153),
('ca23', 4),
('mi4', 31),
('wi8', 5),
('mi1', 2),
('ma10', 8),
('ri1', 1),
('fl16', 7),
('fl25', 6),
('fl20', 22),
('fl22', 5),
('fl19', 3),
('fl12', 3),
('fl11', 8),
('tx25', 460),
('tx20', 38),
('tx22', 2),
('tx18', 15),
('tx17', 3),
('la6', 4),
('tx16', 11),
('tx19', 9),
('tx12', 9),
('tx6', 17),
('tx32', 18),
('ga12', 1),
('ca50', 1),
('ca45', 5),
('ca44', 4),
('ca42', 7),
('ca41', 4),
('ca37', 22),
('ca47', 2),
('ca43', 53),
('ca25', 2),
('ca22', 20),
('nc13', 3),
('nc12', 5),
('il12', 5),
('ca17', 5),
('ca19', 9),
('ca21', 44),
('ca18', 40),
('ca16', 2),
('il16', 7),
('il17', 19),
('il18', 3),
('oh12', 20),
('pa18', 4),
('pa19', 26),
('oh16', 1),
('pa16', 37),
('oh17', 4),
('pa17', 3),
('nj12', 4),
('ny16', 45),
('mi12', 32),
('ny17', 100),
('ny19', 7),
('ny18', 1),
('ny22', 5),
('ny20', 6),
('ny25', 4),
('az8', 2),
('ga8', 7),
('tx30', 23),
('ca33', 4),
('nc8', 18),
('in8', 130),
('ca8', 70),
('ca12', 26),
('oh8', 3),
('va8', 1),
('md8', 1),
('il8', 6),
('mi8', 18),
('nj8', 3),
('ma8', 25),
('mn8', 1),
('wa8', 3),
('tx15', 100),
('fl14', 4),
('fl21', 27),
('tx14', 9),
('fl13', 1),
('fl9', 4),
('fl15', 14),
('tx9', 3),
('fl24', 2),
('tx31', 5),
('tx13', 2),
('tx24', 1),
('tx26', 35),
('ga13', 24),
('ca40', 4),
('ca39', 48),
('ga9', 2),
('ca34', 3),
('ca38', 3),
('tn9', 1),
('nc9', 8),
('ca15', 2),
('ca14', 39),
('ca9', 16),
('ca13', 2),
('oh15', 1),
('pa9', 1),
('il14', 6),
('pa14', 1),
('il13', 130),
('oh13', 70),
('oh9', 21),
('oh14', 21),
('pa13', 6),
('il9', 19),
('pa15', 2),
('mi15', 8),
('nj13', 18),
('ny13', 10),
('mi14', 40),
('mi13', 7),
('nj9', 25),
('mi9', 6),
('ny24', 4),
('ny21', 11),
('ma9', 12),
('wa9', 29),
('tx23', 7),
('tx21', 28),
('fl5', 2),
('tx2', 16),
('tx29', 6),
('la2', 1),
('fl3', 29),
('la4', 29),
('fl2', 5),
('ms4', 41),
('fl4', 3),
('nm2', 1),
('ms2', 12),
('tx4', 60),
('tx3', 3),
('ar4', 5),
('ga3', 14),
('sc2', 8),
('ok2', 12),
('ok4', 13),
('ca53', 42),
('az2', 2),
('az5', 7),
('az4', 47),
('az3', 15),
('ok3', 16),
('ga4', 15),
('ar2', 8),
('sc3', 3),
('ga5', 4),
('ok5', 1),
('ar3', 3),
('ca30', 8),
('ca29', 7),
('ca28', 110),
('sc5', 10),
('ca27', 6),
('sc4', 3),
('nc2', 13),
('tn5', 50),
('ks4', 31),
('co3', 5),
('ks2', 3),
('ut2', 2),
('nc4', 1),
('mo3', 4),
('co5', 30),
('va4', 11),
('mo2', 16),
('mo5', 2),
('ky3', 9),
('ks3', 18),
('va2', 1),
('va3', 170),
('in4', 19),
('co2', 17),
('ca4', 22),
('ca3', 5),
('oh2', 6),
('ne3', 5),
('oh3', 11),
('in5', 13),
('ca2', 14),
('ca5', 8),
('md5', 3),
('md4', 10),
('ia5', 4),
('ia2', 3),
('oh4', 2),
('ia3', 1),
('ne2', 10),
('in2', 8),
('md2', 4),
('ia4', 28),
('oh5', 24),
('nj2', 1),
('md3', 7),
('in3', 12),
('pa4', 7),
('il2', 3),
('nj3', 27),
('il3', 3),
('pa3', 180),
('il4', 22),
('pa2', 2),
('nj4', 4),
('il5', 23),
('pa5', 2),
('wi2', 8),
('nj5', 2),
('or2', 8),
('mi3', 50),
('wi5', 1),
('mi2', 3),
('wi4', 12),
('ny27', 4),
('ny29', 1),
('ct4', 1),
('mi5', 5),
('ct3', 8),
('ct5', 3),
('or4', 12),
('ct2', 2),
('mn2', 3),
('ri2', 130),
('ny28', 20),
('ma5', 26),
('ma3', 6),
('ma4', 52),
('ma2', 5),
('mn3', 40),
('mn5', 12),
('mn4', 6),
('nh2', 10),
('or5', 7),
('or3', 7),
('me2', 2),
('wa5', 19),
('wa4', 2),
('fl23', 4),
('fl10', 10),
('tx10', 3),
('tx11', 43),
('ga11', 68),
('ca48', 6),
('ca36', 5),
('ca35', 6),
('ca11', 9),
('ca10', 11),
('va11', 9),
('va10', 5),
('il11', 200),
('il10', 20),
('oh10', 2),
('oh11', 2),
('nj11', 7),
('nj10', 4),
('mi10', 19),
('mi11', 25),
('ny23', 23),
('tx28', 100),
('tx7', 30),
('fl7', 1),
('fl6', 10),
('az7', 2),
('az6', 28),
('ga7', 10),
('ga6', 8),
('ca32', 6),
('ca31', 18),
('tn7', 5),
('nc7', 3),
('tn6', 6),
('mo7', 8),
('nc6', 20),
('mo6', 9),
('co7', 2),
('co6', 49),
('va7', 6),
('ca6', 6),
('ca7', 34),
('in6', 4),
('in7', 6),
('oh7', 8),
('md6', 14),
('md7', 17),
('pa7', 14),
('pa6', 3),
('il6', 10),
('il7', 6),
('mi6', 2),
('mi7', 5),
('nj6', 1),
('nj7', 6),
('wi6', 8),
('mn7', 80),
('ma6', 13),
('ma7', 1),
('wa6', 16),
('wa7', 2),
('tx27', 15),
('hi1', 7),
('la1', 23),
('al1', 2),
('fl1', 8),
('tx1', 14),
('ga1', 2),
('ms1', 32),
('ca51', 3),
('ar1', 5),
('sc1', 5),
('nm1', 1),
('ca26', 5),
('ok1', 19),
('ky1', 1),
('ks1', 4),
('nc1', 15),
('nv1', 5),
('mo1', 1),
('va1', 14),
('co1', 25),
('oh1', 3),
('ne1', 11),
('ca1', 13),
('ut1', 3),
('wv1', 9),
('md1', 7),
('districtofcolumbia', 5),
('wy', 69),
('in1', 1),
('ia1', 4),
('nj1', 130),
('il1', 21),
('pa1', 9),
('sd', 51),
('wi1', 9),
('ny1', 4),
('mn1', 16),
('ny26', 45),
('ct1', 5),
('ma1', 8),
('vt', 9),
('nh1', 12),
('me1', 7),
('or1', 24),
('wa1', 9),
('pa8', 3),
('ny12', 21),
('ny11', 17),
('ny10', 4),
('ny9', 4),
('ny5', 5),
('ny6', 5),
('ny4', 6),
('ny3', 13),
('ny2', 1),
('ny15', 4),
('ny7', 1),
('tx8', 4),
('tx5', 65),
('fl8', 6),
('sc6', 12),
('la3', 10),
('la7', 120),
('la5', 5),
('wv2', 24),
('ms3', 2),
('il19', 11),
('ga2', 15),
('ga10', 2),
('nc5', 36),
('nc10', 33),
('nc11', 21),
('al5', 6),
('al2', 8),
('al4', 9),
('wv3', 2),
('oh18', 9),
('in9', 5),
('oh6', 190),
('wi3', 3),
('wi7', 200),
('al7', 2),
('al6', 3),
('al3', 13),
('tn8', 7),
('tn4', 9),
('tn3', 11),
('tn2', 11),
('tn1', 4),
('ky2', 5),
('ky5', 7),
('va9', 4),
('va5', 1),
('va6', 13),
('ky6', 11),
('ky4', 17),
('mo8', 40),
('mo4', 9),
('mo9', 3),
('id2', 17),
('id1', 1),
('ut3', 1),
('mt', 140)