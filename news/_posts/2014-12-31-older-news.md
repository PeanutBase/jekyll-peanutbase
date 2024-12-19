---
layout:     news-item
title:      Older News
author:     Sudhansu Dash
date:       2014-12-31
summary:    News archive
categories: jekyll pixyll
---

**(November 2020) New trait association viewer (ZZBrowse); phenotype data from NAM project; data store visualizer.**

  - New tool (ZZBrowse) for exploring marker-trait association from GWAS experiments, allowing comparisons with data from other species. [Example](https://zzbrowse.legumeinfo.org/?tab=Chrom&twoSpecies=y&datasets=Peanut%20GWAS&selected=10803170&window=250000&datasets2=Soybean%20GWAS&selected2=46260000&window2=250000&traitsFromOntology=y&traitsFromOntology2=y&macroMatched=20&macroIntermediate=10&macroMask=10&macroDistance=levenshtein) showing pod/seed weight SNP in peanut that lands in one region of soybean associated with pod number.
  - The GWAS data from the two Nested Association Mapping (NAM) populations reported in [Gangurde SS, et al. (2020)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7206994/) is now at PeanutBase. Visualize using ZZBrowse ([example](https://zzbrowse.legumeinfo.org/?tab=WhGen&twoSpecies=y&datasets=Peanut%20GWAS&selected=100000&window=250000&datasets2=Arabidopsis%20thaliana%20GWAS&selected2=100000&window2=250000&traitsFromOntology=y&traitsFromOntology2=y&macroMatched=20&macroIntermediate=10&macroMask=10&macroDistance=levenshtein)), or download at the DataStore ([NAM_Tifrunner](https://data.legumeinfo.org/Arachis/hypogaea/genetic/NAMTifr.gwas.Gangurde_Wang_2020/), [NAM_Florida-07](https://data.legumeinfo.org/Arachis/hypogaea/genetic/NAMFlor7.gwas.Gangurde_Wang_2020/)).
  - New tool (MultiQC / DSCensor) for visualizing peanut genomic data in our Data Store. Example: [Arachis annotation comparisons](https://dscensor.legumeinfo.org/multiqc-demo/gene_models_main:arachis).
  - New BLAST sequence-search interface ([SequenceServer](https://sequenceserver.legumeinfo.org/)). Please try it and let us know your experience.

**(October 2020) Core genotype paper published, software update, minicore phenotype data.**

  - Genotypic Characterization of the U.S. Peanut Core Collection: This publication is now out.
<br>Paul I. Otyama, Roshan Kulkarni, Kelly Chamberlin, Peggy Ozias-Akins, Ye Chu, Lori M. Lincoln, Gregory E. MacDonald, Noelle L. Anglin, Sudhansu Dash, David J. Bertioli, David Fernández-Baca, Michelle A. Graham, Steven B. Cannon and Ethalinda K. S. Cannon. Genotypic Characterization of the U.S. Peanut Core Collection
<br>[G3: GENES, GENOMES, GENETICS November 1, 2020 vol. 10 no. 11 4013-4026](https://academic.oup.com/g3journal/article/10/11/4013/6048624?login=false).
  - Software update: A number of software packages have been updated to their latest versions to keep PeanutBase up to date and functional.
  - Initial instance of a new tool, ArachisPheno, for exploring peanut phenotype data. This includes [data from the U.S. mini core collection](http://dev.lis.ncgr.org:50007/study/1/). More data sets will be loaded as they become available.

**(September 2020) Arachis pathway data, PeanutMine update.**

  - Pathway data in gene pages at PeanutMine: Now <i>Arachis hypogaea/duranensis/ipaensis</i> reactome data is available in the gene pages at PeanutMine. [Link](https://mines.legumeinfo.org/peanutmine/report.do?id=33200367): please scroll towards the bottom of the page to the section 'Pathways' to see if the gene function is related to a metabolic pathway. Not all genes have this feature, only genes that are listed in the reactome database have this special attribute.
  - PeanutMine update: It has been updated to v2 with data coming from LIS Data Store.

**(August 2020) Nematode resistance QTL dataset from Ballen-Taborda C, Chu, et al. 2019.**

A new source of root-knot nematode resistance from Arachis stenosperma: The QTL dataset from the publication [Ballen-Taborda C, Chu, et al. 2019](https://peanutbase.org/pub/130) is now available at PeanutBase. [QTLs](https://peanutbase.org/search/qtl?citation=Ballen-Taborda,%20Chu%20et%20al.,%202019a), [maps](https://peanutbase.org/featuremap/TT_RunnerIAC886_x_A.batizocoi-A.stenosperma_a).

**(May 2020) Ongoing work to provide access to phenotype data.**

  - The PeanutBase team is working on new tools for interactively exploring phenotype data.
  - [Genotype data and phenotype data](https://peanutbase.org/data/v2/Arachis/hypogaea/traits/minicore.trt.JWYM/) for the mini core are also available at the data store.

**(February 2020) Instructions for GCViT, genotyping project and site improvement.**

  - The genotype display tool [Gigwa](https://peanutbase.org/germplasm/gigwa) and comparison tool [GCViT](/tools/gcvit.html) pages have been given a native PeanutBase look.
  - Instructions have been added to the [GCViT](/tools/gcvit.html) page (Please click the 'Instructions ...' bar).
  - There is a now a new [information page for the genotyping projects](https://peanutbase.org/germplasm/nifa_pccgp).
  - Links have been corrected in the germplasm page.

**(January 2020) African Lines genotyping data and new genotype comparison tool, GCViT for PeanutBase**

  - African Breeding Lines data in PeanutBase gigwa instance: The PIL African Breeding Lines genotyping data are now in the [PeanutBase GIGWA instance](https://peanutbase.org/germplasm/gigwa/). The data files can be downloaded from our [DataStore](https://peanutbase.org/data/public/Arachis_hypogaea/arahy.gnm1.div.LZ50/) too.
  - (New) Genotype Comparison Visualization Tool, [GCViT](/tools/gcvit.html): It is a tool for whole genome visualization of resequencing or SNP array data. GCViT allows a user to compare two or more accessions and visually identify regions of similarity and difference across the genome.
<br>It is capable of multiple chromosome visualisation for the comparison of multiple accessions from a single dataset. It extracts information from VCF file and does a parallel comparison between two or more lines within that VCF file plotting the location of these differences on the chromosome for visualization. One can, for example, plot the differences between progeny and its parents to identify which regions are inherited from which parents. (More information and a [video tutorial](https://www.youtube.com/watch?v=B2gPVUipWo0) about GCViT is at [GitHub](https://github.com/LegumeFederation/gcvit) and [SoyBase](https://soybase.org/gcvit/).)
<br>We need your feedback on the usage of this tool and will appreciate it if you could let us know about your experience via [Contact us](/contact).

**(December 2019) AAGB Conference Abstracts now available in PeanutBase, 2018 & 2019.**

The AAGB conference abstracts for October 21-25, 2019 (Jinan, CHINA) and November 12-16, 2018 (Saly, SENEGAL) along with their programs are now available at the [AAGB page](https://peanutbase.org/AAGB).

**(October 2019) Map and QTL dataset from Kolekar, Sujay, et al. 2016a**

The [genetic map](https://peanutbase.org/featuremap/TT_TAG24_x_GPBD4_b) and [QTL data](https://peanutbase.org/search/qtl?citation=Kolekar,%20Sujay%20et%20al.,%202016a) from [Kolekar, Sujay, et al. 2016a](https://peanutbase.org/pub/129) have been loaded.

**(August 2019) Improvements to the A. hypogaea Tifrunner assembly released.**

Corrections to the <i>A. hypogaea</i> var. Tifrunner genome assembly were made by the [DNA Zoo](https://www.dnazoo.org/), on the basis of Hi-C data produced by the [Aiden lab](http://www.aidenlab.org/). A summary of the changes is [here](https://peanutbase.org/peanut_genome_v1_v2), the genome data can be downloaded [here](https://v1.legumefederation.org/data/public/Arachis_hypogaea/Tifrunner.gnm2.J5K5/), and the gene model annotations are available [here](https://v1.legumefederation.org/data/public/Arachis_hypogaea/Tifrunner.gnm2.ann1.4K0L/). See also this [DNA Zoo announcement](https://www.dnazoo.org/post/tetraploid-peanut-genome-assembly-published-in-nature-genetics).

**(June 2019) US mini core genotype data available**

  - [Genotype data]() for the US peanut mini core (Otyama, et al., in press) is now available at PeanutBase via Gigwa ([http://southgreen.fr/content/gigwa](http://southgreen.fr/content/gigwa)), a web-based tool for exploring genotype database. See instructions for [filtering data](https://southgreen.fr/sites/southgreen.fr/files/uploads/gigwa_releases/2-gigwaV2-searching-commented.mp4) and [managing outputs](https://southgreen.fr/sites/southgreen.fr/files/uploads/gigwa_releases/3-gigwaV2-outputs-commented.mp4).
  - More information added regarding the [Tifrunner genome assembly](https://peanutbase.org/organism/Arachis/hypogaea?pane=genome).
  - Some small bugs in the website and data have been fixed, particularly regarding germplasm records.

**(April 2019) New high-density genetic map from Hu, et al., 2018, CViTjs 1.0**
  - The [high-density genetic map](https://peanutbase.org/featuremap/TT_Huayu28_x_P76_a) and [QTL data](https://peanutbase.org/search/qtl) from [Hu, et al. 2018](https://peanutbase.org/pub/128) have been loaded.
  - The [1.0 release of CViTjs](https://github.com/LegumeFederation/cvitjs) has been integrated into the [BLAST search results](https://peanutbase.org/blast).
  - Bug fixes to [germplasm search](https://peanutbase.org/search/stock).

**(February 2019) Map and QTL dataset from Leal-Bertioli, Moretzsohn, et al. 2016**

The [genetic map](https://peanutbase.org/featuremap/AA_A.duranensis_x_A.stenosperma_d) and [QTL data](https://peanutbase.org/search/qtl) from [Leal-Bertioli, Moretzsohn, et al. 2016](https://peanutbase.org/pub/83) have been loaded.

**(November 2018) New comparative map viewer; map downloads in Legume Federation Data Store; new JBrowse tracks**

  - A new comparative map viewer, [cmap-js](https://github.com/LegumeFederation/cmap-js), has been released at PeanutBase. For example, see the [Agarwal et al. high-density map](https://peanutbase.org/cmap-js/launchCmap-js.php?display=TT_Tifrunner_x_GT-C20_c).
  - Genetic map downloads now available via the [Legume Federation Data Store](https://v1.legumefederation.org/data/public/Arachis_hypogaea/).
  - Tracks for the 58k and 48k SNP chips added to <i>A. duranensis</i>, <i>A. ipaensis</i>, and <i>A. hypogaea</i> cult. Tifrunner JBrowse instances.

**(September 2018) Data from Leal-Bertioli et al., 2015 available; new root transcriptome expression atlas; more SNPs aligned to A. hypogaea.**

  - [Map](https://peanutbase.org/featuremap/BB_A.ipaensis_x_A.magna_b) and [QTL](https://peanutbase.org/search/qtl?citation=Leal-Bertioli,%20Cavalcante%20et%20al.,%202015a) for Rust and several morphological traits from [Leal-Bertioli et al. 2018, Identification of QTLs for Rust Resistance in the Peanut Wild Species <i>Arachis magna</i> and the Development of KASP Markers for Marker-Assisted Selection](https://peanutbase.org/pub/81) have been loaded.
  - [Root transcriptome](https://peanutbase.org/gene_expression/atlas_symbiosis) for <i>A. hypogaea</i> infected with Bradyrhizobium sp. SEMIA 6144 from [Karmakar K., et al. (2018), Transcriptomic analysis with the progress of symbiosis in 'crack-entry' legume <i>Arachis hypogaea</i> highlights its contrast with 'infected thread' adapted legumes. Mol Plant Microbe Interact.](https://pubmed.ncbi.nlm.nih.gov/30109978/)
  - SNPs for the 2nd generation 48k Affymetrix SNP chip (Axiom_Arachis2) have been aligned on the [<i>A. hypogaea</i> genome browser](https://peanutbase.org/gbrowse_peanut1.0).

**(August 2018) SNP datasets aligned to genomes, new leaf spot and TSWV QTL, new high density SNP map, NCBI A. hypogaea annotation.**

  - SNPs for the 2nd generation 48k Affymetrix SNP chip (Axiom_Arachis2) have been aligned on the [<i>A. duranensis</i>](https://peanutbase.org/gbrowse_aradu1.0) and [<i>A. ipaensis</i>](https://peanutbase.org/gbrowse_araip1.0) genome browsers.
  - SNPs from [Agarwal et al. 2018](https://peanutbase.org/pub/124) aligned to the <i>A. hypogaea</i> Tifrunner [browser](https://peanutbase.org/gbrowse_peanut1.0).
  - [SNPs](https://peanutbase.org/search/marker?citation=Agarwal,%20Clevenger%20et%20al.,%202018a) and [high density map](https://peanutbase.org/featuremap/TT_Tifrunner_x_GT-C20_c) from [Agarwal et al. 2018](https://peanutbase.org/pub/124) loaded into database.
  - The [gene model annotation from NCBI](https://www.ncbi.nlm.nih.gov/genome/annotation_euk/Arachis_hypogaea/100/) is now on the <i>A. hypogaea</i> [browser](https://peanutbase.org/gbrowse_peanut1.0). 

**(June 2018) Two sets of germplasm traits (Simpson and Holbrook), tissue expression atlas on A. hypogaea, new gene family BLAST target.**

  - Traits assessed between 1982 and 1988 for the 1977-1986 for the accessions collected in South America by Charles Simpson, Antonio Krapovickas, Walton Gregory, José Valls, Don Banks, and colleagues loaded and displayed on germplasm record pages. See an [example](https://peanutbase.org/stock/Arachis/hypogaea/Accession/PI-468195).
  - Above and below ground traits collected by Corley Holbrook in the late 1990s for the US Mini Core are loaded and displayed on germplasm record pages. See an [example](https://peanutbase.org/stock/Arachis/hypogaea/Accession/PI-259658).
  - The tissue expression atlas from [Clevenger et al. 2016](https://www.frontiersin.org/articles/10.3389/fpls.2016.01446/full) is now available as a [display of differential expression between tissues](https://peanutbase.org/gene_expression/atlas) and showing expression levels on the [peanut genome browser](https://peanutbase.org/gbrowse_peanut1.0).
  - The new [Legume Federation gene model families](https://www.legumeinfo.org/node/7138225) are now available for [BLASTing](https://peanutbase.org/blast) against a protein database (blastx or blastp). The older Phytozome gene families are also still available as a BLAST target, but deprecated. These are named "Gene Family Consensus - Legume Federation 1.0" and "Gene Family Consensus - Phytozome 10.2 (deprecated)" respectively. 

**(May 2018) Detailed data records and gene families for cultivated peanut (A. hypogaea) gene models are now available.**

  - Gene models for cultivated peanut (<i>A. hypogaea</i>) have been added to the new Legume Federation gene families, which are searchable at [LegumeInfo.org](https://www.legumeinfo.org/search/phylotree). More information about the gene families is [here](https://www.legumeinfo.org/node/7138225).
  - Detailed information about individual gene models can be found on the [gene model pages](https://peanutbase.org/search/gene).
  - Gene models are available for [download](https://peanutbase.org/data/public/Arachis_hypogaea/) and [BLASTing](https://peanutbase.org/blast), and can be browsed on the genome using [GBrowse](https://peanutbase.org/gbrowse_peanut1.0) and [JBrowse](https://peanutbase.org/node/319881/?data=arahy.Tifrunner.gnm1).
  - To learn more about the <i>A. hypogaea</i> Tifrunner genome assembly and gene models, see the [peanut genome information page](https://peanutbase.org/peanut_genome).

**(April 2018) Sequence search (BLAST) for cultivated peanut genes is available.**

  - Genes (coding sequence / CDS) can now be searched for the cultivated peanut genome, using [BLAST](). This extends the genome BLAST search which was enabled in December.
  - Announcement: Breeders Workshop before APRES meeting
<br>A [breeders workshop](https://peanutbase.org/workshops#2018Williamsburg) will be held July 9th, 2018 8:00AM-12:00PM in Williamsburg, VA, the day before the [APRES meeting](https://apresinc.com/meetings/future-meeting-dates/). The focus will be on Marker Assisted Selection. More information coming soon.

**(March 2018) A. hypogaea gene models, PeanutBase advisory committee report available.**

  - The <i>A. hypogaea</i> gene models are now displayed on the genome browsers, both [GBrowse](https://peanutbase.org/gbrowse_peanut1.0) and [JBrowse](https://peanutbase.org/node/319881/?data=arahy.Tifrunner.gnm1).
  - The new gene models are also available for [download](https://peanutbase.org/data/public/Arachis_hypogaea/).
  - The 2017 report from the [PeanutBase advisory committee](https://peanutbase.org/community#about) is now [online](https://peanutbase.org/files/misc/PeanutBase_AdvisoryBoard_FinalReport2017.docx).

**(February 2018) Gene atlas added to peanut browser**

  - The tissue atlas from [Clevenger et al. 2016](https://www.frontiersin.org/articles/10.3389/fpls.2016.01446/full) as been added to both the cultivated peanut (<i>Arachis hypogaea</i>) genome browsers. The new tracks can be viewed in [GBrowse](https://peanutbase.org/gbrowse_peanut1.0) or [JBrowse](https://peanutbase.org/node/319881/?data=arahy.Tifrunner.gnm1).
  - Cultivated peanut genome assembly available
<br>The cultivated peanut genome assembly is now available under the [Ft. Lauderdale agreement](https://www.genome.gov/pages/research/wellcomereport0303.pdf). No group may publish whole-genome research until the IPGI has first published a formal description of the genome assembly. The genome assembly can be [downloaded](https://peanutbase.org/peanut_genome), [browsed with GBrowse](https://peanutbase.org/gbrowse_peanut1.0), and searched with [BLAST](https://peanutbase.org/blast).

**(December 2017) Software updates, all downloads served from Legume Federation data store, page updates**

  - PHP has been updated to the current version (7.1)
  - Database upgraded to to current version of [Chado](https://github.com/GMOD/Chado): 1.31. This change should be invisible, but please let us know if you find problems.
  - [JBrowse](https://jbrowse.org/jb2/) has been updated to the current release (1.12.3)
  - All downloads have been moved to the [Legume Federation data store](https://peanutbase.org/data/public/), with a consistent naming scheme and directory structure, and mirrored at [CyVerse](https://de.cyverse.org/) (in the LegumeFederation folder inside "Community Data").
  - Page updates: updated assembly information on several pages, improved gene model pages and added links to the LIS synteny browser, the [Context Viewer](https://legumeinfo.org/lis_context_viewer/#/search/lis/aradu.Aradu.00IE4), other bug fixes.

**(November 2017) Tripal updated to version 1.2, repairs and improvements to gene model pages**

  - Tripal, which provides most of the PeanutBase functionality, has been updated to version 1.2 so that PeanutBase can take advantage of the latest Tripal improvements. The update should be "invisible": all pages should look the same. Please [let us know](/contact) if anything stops working.
  - Links to term definitions and protein domains have been added to gene model search results and record pages.
  - Minor bug repairs to the gene model search and record pages.

**(October 2017) NCBI annotations added to the A. duranensis and A. ipaensis genome browsers.**

The [NCBI annotations](https://www.ncbi.nlm.nih.gov/genome/annotation_euk/process/) are now available in the [<i>A. duranensis</i>](https://peanutbase.org/jbrowse/?data=Aradu1.0&loc=Aradu.A04%3A117039015..117120174&tracks=arduGeneNCBI&highlight=) and [<i>A. ipaensis</i>](https://peanutbase.org/jbrowse/?data=Araip1.0&loc=Araip.B01%3A68030515..68650514&tracks=araipGeneNCBI&highlight=) genome browsers. These annotations are calculated by NCBI for the representative genomes of all eukaryotes. See more information about NCBI's [<i>A. duranensis</i>](https://www.ncbi.nlm.nih.gov/genome/annotation_euk/Arachis_duranensis/101/) and [<i>A. ipaensis</i>](https://www.ncbi.nlm.nih.gov/genome/annotation_euk/Arachis_ipaensis/101/) annotations.

**(August 2017) Improvements to marker search and new marker data**

  - Now possible to search for markers by publication.
  - Complete marker data for [Liang et al., 2009](https://peanutbase.org/node/573) has been loaded.

**(June 2017) PeanutBase now hosts Peanut Bioscience content**

  - PeanutBase now hosts the contents of the Peanut Biosciences website in new pages for the [IGPI/PGC meetings](/community/IPGI.html) and the [AAGB conference](https://peanutbase.org/AAGB).
  - Added sequences for the 476 markers described in [Nagy and Cho 2010](https://peanutbase.org/pub/113).

**(May 2017) Peanut downloads in the data store, more marker data**

  - The [Data Store](https://v1.legumefederation.org/data/public/) is a new way to access bulk data at PeanutBase. Data sets (assemblies, annotation, repeats, synteny etc.) are now available in the [Data Store](https://v1.legumefederation.org/data/public/), and via the mirrored CyVerse [Legume Federation Data Commons](https://datacommons.cyverse.org/browse/iplant/home/shared/Legume_Federation). The Data Store is also available from a new button on the PeanutBase home page, and the data sets are still available via the older Download tab at PeanutBase.
  - [Marker data improvements](https://peanutbase.org/search/marker): sequence and primers added for 7400 markers; an example [marker page](https://peanutbase.org/feature/Arachis/spp./genetic_marker/Lec-1).

**(March 2017) Interactive tour for QTL data and new marker track**

  - An <a class="link" onclick="lisTours.go('pb-qtl-search-to-gbrowse');">interactive tour</a> of the [QTL data](https://peanutbase.org/search/qtl) is now available. All interactive tours can be found on the [Help](/help) page.
  - 504 markers from the publication [Shirasawa, Hirakawa et al., 2012](https://peanutbase.org/pub/117) have been added as tracks to the [<i>A. duranensis</i>](https://peanutbase.org/gbrowse_aradu1.0) and [<i>A. ipaensis</i>](https://peanutbase.org/gbrowse_araip1.0) genome browsers.
  - We are continuing to improve [marker data](https://peanutbase.org/search/marker), adding sequence, position, and other data for each marker.

**(February 2017) SNPs from the Arachis SNP chip now available**

The 15,746 SNPs from the new Arachis SNP chip ([Pandey et al., 2017](https://www.nature.com/articles/srep40577)) which were determined to be polymorphic in <i>A. hypogaea</i> ([Clevenger et al., 2017](https://www.cell.com/molecular-plant/fulltext/S1674-2052(16)30300-8?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS1674205216303008%3Fshowall%3Dtrue)) have been loaded into the [<i>A. duranensis</i>](https://peanutbase.org/gbrowse_aradu1.0) and [<i>A. ipaensis</i>](https://peanutbase.org/gbrowse_araip1.0) genome browsers. Sequence and position details for [each SNP](https://peanutbase.org/feature/Arachis/spp./genetic_marker/AX-147221298) can be found in the [marker pages](https://peanutbase.org/search/marker) - search for markers starting with "AX-".

Genomic positions for an additional 3644 markers have been added to their marker records, for example [Ah1TC06H03](https://peanutbase.org/feature/Arachis/spp./genetic_marker/Ah1TC06H03).

**(January 2017) Improvements to whole genome view of BLAST results**

CViTjs is now integrated into the [BLAST utility](https://peanutbase.org/blast) to display BLAST hits locations on an entire genome. This view is only available when BLASTing against genome targets (with blastn or tblastn).

CViTjs provides an interactive hit viewer with these features:
  + Zoom in and out using the + and - buttons
  + Click the wrench button to get a tool palette for: panning, zooming to a selected region, drawing, erasing, and choosing colors
  + The reset button between the two zoom buttons will return the image to its original state 

**(December 2016) Gene expression with eFP browser, whole genome visualization of BLAST hits**

  - Gene expression for 22 tissues (Clevenger et al., 2016) using the [BAR eFP browser](http://bar.utoronto.ca/efp_arachis/cgi-bin/efpWeb.cgi?dataSource=Arachis_Atlas&modeInput=Absolute&primaryGene=Adur114_comp0_c1_seq8) is available on the [gene model pages](https://peanutbase.org/feature/Arachis/duranensis/gene/Aradu.J3GMZ?pane=Expression).
  - Whole genome visualization of hits added to the BLAST results page, for searches against the <i>A. duranensis</i> or <i>A. ipaensis</i> genomes ([nucleotide-nucleotide](https://peanutbase.org/blast/nucleotide/nucleotide) search or [protein-nucleotide](https://peanutbase.org/blast/protein/nucleotide) search).

**(November 2016) Newsletter signup; transcript mappings, bug fixes.**

  - Sign up for the PeanutBase [newsletter](https://peanutbase.us13.list-manage.com/subscribe?u=c442fb86dbc3ba6cce030d6d3&id=550fb0fe78). The October issue can be seen [here](https://mailchimp.com/about/mcsv-static), and the June issue [here](https://mailchimp.com/about/mcsv-static).
  - Transcripts from Clevenger et al., 2016 have been mapped to the [<i>A. duranensis</i>](https://peanutbase.org/files/genomes/Arachis_hypogaea/transcriptomes/Arahy.Tifrunner.sSQ6/A.transcripts.mapped.to.genemodels.txt) and [<i>A. ipaensis</i>]() genomes by Josh Clevenger. Available on the [gene expression atlas page](https://peanutbase.org/gene_expression).
  - Bug fixes in QTL, BLAST, map, and germplasm pages.

**(October 2016) Trait data attached to germplasm pages**

Trait data from GRIN has been imported into PeanutBase, permitting germplasm searching by trait.

**(September 2016) New pedigree chart, transcriptome, genome summaries, and germplasm improvements**

  - An interactive [pedigree chart](https://peanutbase.org/pedigree2000) from 'Use of Plant Introductions in Peanut Cultivar Development.' 2001. T G Isleib, C C Holbrook, D W Gorbet.
  - <i>Arachis hypogaea</i> tissue transcriptome for <i>A. hypogaea</i> mapped to [<i>A. duranensis</i>](https://peanutbase.org/gbrowse_aradu1.0) and [<i>A. ipaensis</i>](https://peanutbase.org/gbrowse_araip1.0); also, atlas expression data has been imported into PeanutMine, where heatmaps of expression can be generated for arbitrary lists of transcripts (as in the templated query example [Genes => GOTerms => mRNAs](https://mines.legumeinfo.org/peanutmine/templates.do)).
  - Pages describing the [<i>A. duranensis</i>](https://peanutbase.org/organism/Arachis/duranensis?pane=genome) and [<i>A. ipaensis</i>](https://peanutbase.org/organism/Arachis/ipaensis?pane=genome) genome assemblies
  - Synonyms have been added to [germplasm data](https://peanutbase.org/chado/stock) and can be used to find stock records.
  - Instructions for finding promoters added the the [FAQs](https://peanutbase.org/help#faq) and an interactive <a class="link" onclick="lisTours.go('germplasm-map');">tour</a> for the germplasm map.

**(August 2016) New markers loaded and germplasm can be searched**

About 15,000 [new markers](https://peanutbase.org/search/marker) have been loaded. PeanutBase now holds [germplasm data](https://peanutbase.org/chado/stock), which can be searched and viewed in detail.

**(July 2016) New search page for peanut projects recorded at NCBI**

A new search feature for peanut [BioProjects at NCBI](https://peanutbase.org/arachis_bioproj) is now available.

**(June 2016) New PeanutMine query tool, more intuitive trait search, improved marker display, new "A" genome report**

  - [PeanutMine](https://mines.legumeinfo.org/peanutmine/begin.do): A powerful new interface for querying peanut genetic and genomic data, and operating on lists of features. Developed in collaboration with the Legume Information System and Legume Federation projects.
  - Improved [search for peanut traits and QTL](https://peanutbase.org/search/qtl), to allow "broad" and "narrow" searches. For example, broad searches will expand a trait search for "oil" to return "seed linoleic" and other oil-related traits.
  - Improved [display of genetic markers in the genome browsers](https://peanutbase.org/gbrowse_aradu1.0) (now colored by marker type).
  - Report of [a new "A" genome (<i>Arachis duranensis</i>)](https://www.pnas.org/doi/full/10.1073/pnas.1600899113) sequence report (for accession PI475845) adds information to complement the [reference A genome at PeanutBase (accession V14167)](https://peanutbase.org/data_usage_agree_aradu).

**(May 2016) Upload data to geographic map, improved QTL search**

  - It is now possible to upload datasets to the [<i>Arachis</i> interactive geographic map](https://peanutbase.org/germplasm/map). See an example [here](https://peanutbase.org/germplasm/map#?zoom=2&maxRecs=200&taxonQuery=Arachis%20hypogaea&traitOverlay=Population&traitScale=global&country=&geocodedOnly=false&traitExcludeUnchar=false&lat=-1.41&lng=17.75&mapHeight=350&baseMap=ESRI%20-%20NatGeo%20(default,%20reference%20map)&ne_lat=51.39920565355378&ne_lng=237.30468750000003&sw_lat=-53.12040528310657&sw_lng=-201.79687500000003&userDataURL=%2Fgermplasm%2Fmap%2Fstatic%2Fgrin_app%2Fexample-user-data.txt&userDataName=example.csv&limitToMapExtent) (US mini core population structure, data taken from [Wang et. al, 2011](https://pubmed.ncbi.nlm.nih.gov/21822942/)).
  - [QTL search](https://peanutbase.org/search/qtl) has been improved
  - Bug fixes

**(April 2016) A utility for finding peanut/Arachis publications**

A utility to [scan the recent <i>Arachis</i> literature](https://peanutbase.org/publications/arachis_recent_pubs) at Pubmed.

**(March 2016) Arachis diploid genome paper published; interactive map of Arachis germplasm; new markers**

  - The paper describing the <i>A. ipaensis</i> and <i>A. duranensis</i> genome, 'The genome sequences of <i>Arachis duranensis</i> and <i>Arachis ipaensis</i>, the diploid ancestors of cultivated peanut', has been published in Nature Genetics. It is available [here](https://www.nature.com/articles/ng.3517).
  - [Interactive geographic map](https://peanutbase.org/germplasm/map#?zoom=0&maxRecs=200&taxonQuery=&traitOverlay=&traitScale=global&country=&geocodedOnly=false&traitExcludeUnchar=false&limitToMapExtent&lat=-1.41&lng=17.58&mapHeight=350&baseMap=ESRI%20-%20NatGeo%20(default,%20reference%20map)&ne_lat=88.39887492711598&ne_lng=895.7812500000001&sw_lat=-88.4755628612898&sw_lng=-860.6250000000001) of <i>Arachis</i> [germplasm](https://peanutbase.org/germplasm), colored by species, and linking to GRIN records, with new functionality:
    + Display Options for [Overlay Characterization and Evaluation](https://peanutbase.org/germplasm/map), to allow coloring and display by trait.
    + Display Options for [Search Accession IDs](https://peanutbase.org/germplasm/map), allowing lists of accession IDs, and coloring by accessions.
  - New microsatellite markers from Moretzsohn, Leoi et al. (2005), e.g. [pPGSSeq17H10](https://peanutbase.org/feature/Arachis/spp./genetic_marker/pPGSSeq17H10).

**(February 2016) New gene expression atlases - for nematode and drought responses**

[Expression views and atlases](https://peanutbase.org/gene_expression) for nematode and drought responses, courtesy Patricia Guimaraes and Ana Cristina Miranda Brasileiro et al.
Access these via the Browse & Search menu, or directly:
  + [Tissue expression atlas](https://peanutbase.org/gene_expression/atlas) (22 tissues from <i>Arachis hypogaea</i>)
  + [Nematode response experiment](https://peanutbase.org/gene_expression/atlas_nematode) (treatment and control in <i>A. stenosperma</i>)
  + [Drought response experiment](https://peanutbase.org/gene_expression/atlas_nematode) (treatment and control in <i>A. duranensis</i>)

**(December 2015) New metabolic pathway viewer; improved gene pages; markers loaded for germplasm diversity; improved gene pages**

  - Metabolic pathways now available via collaboration with Reactome for <i>Arachis duranensis</i> and <i>Arachis ipaensis</i>, e.g. [glycolipid desaturation pathways for <i>Arachis duranensis</i>](https://plantreactome.gramene.org/PathwayBrowser/#SPECIES=6848275&DIAGRAM=6851900&PATH=6851897,6851896,6851901).
  - Improved gene report pages, with more easily accessible sequences, e.g. [Araip.5TB63](https://peanutbase.org/feature/Arachis/ipaensis/gene/Araip.5TB63).
  - New [marker sets](https://peanutbase.org/search/marker) loaded for identifying botanical varieties (He, Meng et al. 2005), e.g. [PM350](https://peanutbase.org/feature/Arachis/spp./genetic_marker/PM350?pane=base).
  - New [marker sets](https://peanutbase.org/search/marker) loaded for identifying diversity in <i>Arachis</i> (Palmieri, Bechara et al., 2005), e.g. [Ap158](https://peanutbase.org/feature/Arachis/spp./genetic_marker/Ap158?pane=base).

**(November 2015) Genetic markers from three more map publications, and improvements to gene family and synteny views**

  - Nearly 500 additional markers (see the [marker search page](https://peanutbase.org/search/marker)) have been added to the database from three publications: Cuc, Mace, et al. 2008; Ferguson, Burow, et al. 2004; and Moretzsohn, Hopkins, et al. 2004. Some examples: [IPAHM023](https://peanutbase.org/feature/Arachis/spp./genetic_marker/IPAHM718), [pPGSseq9H8](https://peanutbase.org/feature/Arachis/spp./genetic_marker/pPGSSeq9H08), [Ah-736](https://peanutbase.org/feature/Arachis/spp./genetic_marker/Ah-736)
  - Improved gene family and synteny views (at partner site LegumeInfo): clearer legends, help, gene highlighting, and synteny features. An example [gene tree with <i>Arachis</i> gene highlighted](https://www.legumeinfo.org/chado_phylotree/phytozome_10_2.59053124?hilite_node=araip.Araip.47948.1), and a corresponding [synteny view](https://www.legumeinfo.org/lis_context_viewer/index.html#/search/araip.Araip.47948?numNeighbors=8&numMatchedFamilies=6&numNonFamily=5&algorithm=repeat&match=5&mismatch=-1&gap=-1&threshold=25&order=chromosome).

**(October 2015) New gene expression atlas; new marker search & reports; trait evaluation data; pollination & crossing technique video**

  - [New gene expression atlas](https://peanutbase.org/gene_expression/atlas). Comparison of RNA-Seq read counts from 22 <i>Arachis hypogaea</i> tissues against <i>Arachis ipaensis</i> and <i>A. duranensis</i> genomes combined, from Dr. Peggy Ozias-Akins and colleagues.
  - [New marker search page](https://peanutbase.org/search/marker) and reports, e.g. [Lec-1](https://peanutbase.org/feature/Arachis/spp./genetic_marker/Lec-1).
  - Trait evaluation data for peanut germplasm: PeanutBase has just started attempting serve the [germplasm evaluation data](https://peanutbase.org/germplasm) (for traits or descriptors) for peanut. The evaluation data has been downloaded from the USDA GRIN website and are served [here](https://peanutbase.org/germplasm/grin/peanut/query?grin_acc_no=289620) at PeanutBase. This utility is work in progress and would improve in future with better search capability and with more associated data. We request our user community to [suggest](/contact) improvements to make this utility more useful.
  - Pollination/Crossing technique in peanut: A [video tutorial](https://drive.google.com/file/d/0B83uedJc4U40eXhIUHplMEEyNk0/view?usp=sharing) by [Shyam Tallury](http://www.clemson.edu/public/rec/peedee/faculty_staff/tallury.html), Ph.D. (Peanut Breeder, Advanced Plant Technology, Clemson Pee Dee Research & Education Center)

**(September 2015) New feature to search germplasm; 41 QTL added**

  - New germplasm search feature. The new feature, [GRIN Connect](https://peanutbase.org/germplasm), permits searching the GRIN global germplasm database directly from PeanutBase. (Or the direct link to the query page [here](https://peanutbase.org/grinconnect/query).)
  - 41 QTL reported by Sarvamangala C, Gowda MVC, Varshney RK. (2011) are now available: [publication](https://peanutbase.org/pub/52), [map](https://peanutbase.org/featuremap/TT_TG26_x_GPBD4_b), and [QTL features](https://peanutbase.org/search/qtl).

**(July 2015) Peanut gene expression atlas; sequence viewer in JBrowse; new repeat/transposable sequences.**

  - A gene expression atlas with 22 tissues from peanut is now available in the GBrowse genome browsers for [<i>A. duranensis</i>](https://peanutbase.org/gbrowse_aradu1.0) and [<i>A. ipaensis</i>](https://peanutbase.org/gbrowse_araip1.0). This pre-publication data is courtesy of Peggy Ozia-Akins lab in collaboration with Brian Scheffler. Transcript densities of these <i>Arachis hypogaea</i> tissues have been mapped onto the combined <i>A. duranensis</i> and <i>A. ipaensis</i> genomes here at PeanutBase by Wei Huang. Please contact the authors before using or citing this data.
  - The JBrowse genome viewers (e.g. [Aradu.A01](https://peanutbase.org/genomes/jbrowse/?data=Aradu1.0&loc=Aradu.A01), [Araip.B01](https://peanutbase.org/genomes/jbrowse/?data=Araip1.0&loc=Araip.B01)) have a new sequence viewer plug-in, with the ability to grab up- and downstream sequence retrieval or reverse-complement sequence around features. Right-click or control-click on any feature (except for synteny), then choose "Sequence Viewer". Also check the new fullscreen viewing capability of this browser ("Fullscreen" button at the top right corner of the JBrowse menu bar).
  - New repeat and transposable element sequences from the group of Drs. David and Soraya Bertioli: [download repeats](https://peanutbase.org/download#repeats)

**(June 2015) InterPro domain descriptions for all proteins; new JBrowse bookmark feature**

  - [InterPro domains](https://peanutbase.org/search/protein_domains): The <i>Arachis</i> gene models have now been annotated with protein domains searchable via InterPro domain IDs or a description word.
  - New JBrowse feature: save sets of bookmarks (of tracksets and views) under Tools: "Quick Bookmarks"

**(May 2015) Phytozome 10.2 gene models, new and improved map and marker data experience; three new QTL datasets loaded.**

  - [Gene family memberships and trees](http://legumeinfo.org/search/phylotree) (at legumeinfo.org) have been rebuilt using Phytozome 10.2 family models, and now include seven legume species, including <i>Arachis ipaensis</i> and <i>Arachis duranensis</i>.
  - Improvements were made regarding the handling and presentation of genetic maps and marker​​ data.
  - QTL data from [Buro​w, Starr et al. (2014a)](https://peanutbase.org/pub/80), [Mondal, Hadapad et al. (2014a)](https://peanutbase.org/pub/86), and [Selvaraj, Narayana et al. (2009a)](https://peanutbase.org/pub/87) are now available.
  - Numerous bug fixes.

**(April 2015) View genomes via the faster JBowse; BLAST hit visualization; Interactive CMap; Enhanced Map Overview.**

  - Now you can browse the genomes via the faster JBrowse: [Aradu](https://peanutbase.org/genomes/jbrowse?data=Aradu1.0) and [Araip](https://peanutbase.org/genomes/jbrowse?data=Araip1.0)
  - [BLAST](https://peanutbase.org/blast) hit visualization: Now comes with a graphic presentation to help visualize the location of hits on the target
  - Access the <i>Arachis</i> genetic maps via the [Interactive CMap](https://peanutbase.org/traits_maps/cmap) tool
  - The Map Overview page has a new design that simplifies access to map sets and individual linkage groups. Also see the new RFLP-based tetraploid map published in Burow, Starr et al., 2014a.

**(March 2015) Many new peanut images (seeds, pods, plants; various species); New "gene basket" tool.**

  - Peanut (<i>Arachis</i>) [germplasm images](https://peanutbase.org/germplasm) can now be viewed at PeanutBase. Close to 2,000 images have been generously contributed by Noelle Barkley (USDA ARS, Griffin GA), to make them available to the peanut research community.
  - New "shopping cart" feature (or "basket") for managing sets of genes (e.g. collect protein or CDS sequences and gene descriptions), under the [gene search page](https://peanutbase.org/search/gene).

**(February 2015) Diploid assemblies now in GenBank; Peanut consensus genetic map available.**

  - The [<i>A. duranensis</i>](http://www.ncbi.nlm.nih.gov/assembly/GCA_000817695.1/) and [<i>A. ipaensis</i>](http://www.ncbi.nlm.nih.gov/assembly/GCA_000816755.1/) genome assemblies were submitted to GenBank and now they have been published.
  - The [consensus genetic map](https://peanutbase.org/filebrowser/download/463) for tetraploid Arachis published in Shirasawa, Bertioli et al., 2013a is now available for download.

**(January 2015) New BLAST targets (genes); New gene pages and descriptors; peanut at PAG**

  - At the [BLAST](https://peanutbase.org/blast) page, we have added <i>A. duranensis</i> and <i>A. ipaensis</i> gene targets, as peptides (blastp and blastx) and nucleotides (blastn and tblasn). These link to both alignment views and to the respective genome browsers.
  - New functional descriptions available at [gene search page](https://peanutbase.org/search/gene)
  - [Peanut talks at 2015 PAG](https://pag.confex.com/pag/xxiii/webprogram/#srch=words|peanut%20groundnut%20Arachis|method|or|pge|1)
  - Come visit us at PAG, for the [LIS computer demo](https://pag.confex.com/pag/xxiii/webprogram/Paper15999.html) or stop by the Plant Databases Booth (#407).

**(December 2014) PeanutBase was recognized at AAGB 2014, practice tutorial, BLAST against both diploid genomes**

  - The PeanutBase team was recognized for its contribution towards facilitating the assembly of the diploid peanut genomes and the practical utility at the Seventh International Conference of the Peanut Research Community (Advances in <i>Arachis</i> through Genomics & Biotechnology), November, 2014, at Savannah GA USA.
  - Our activity at AAGB included a tutorial on using PeanutBase, poster and powerpoint presentation, survey to get inputs from the user community and contacting the community for content contribution and further development.
  - A [practice tutorial](https://peanutbase.org/tutorial_aagb2014) for using PeanutBase is now available too.
  - Now you can [BLAST](https://peanutbase.org/blast) against both diploid genomes in one go: just select both species from the dropdown for 'Nucleotide BLAST Databases'.
  - [Outreach page](https://peanutbase.org/outreach): Please have a look at this page, our collection of outreach materials so far.

**(November 2014) Diploid gene models in genome browser, new sequence search utility, reorganization of site and more QTL data**

  - Gene models are now available, both as genome browser tracks for the sequenced wild peanut species [<i>A. duranensis</i>](https://peanutbase.org/gbrowse_aradu1.0) and [<i>A. ipaenensis</i>](https://peanutbase.org/gbrowse_araip1.0), and for [download](https://peanutbase.org/genomes). Two gene model sets are available: predicted using the MAKER and GLEAN software, respectively. The Peanut Genome Consortium will be using the MAKER models as the primary set for analysis and description of the genes in these species.
  - Molecular markers from several mapping studies are available as genome browser tracks for [<i>A. duranensis</i>](https://peanutbase.org/gbrowse_aradu1.0) and [<i>A. ipaenensis</i>](https://peanutbase.org/gbrowse_araip1.0).
  - A new [keyword search](https://peanutbase.org/keyword_search) utility has been added to facilitate searching for sequence features, such as gene IDs/names, words in annotation, etc.
  - Many changes in the navigation and in the home page layout. Please [let us know](/contact) if you have questions or suggestions.
  - New [QTL data sets](https://peanutbase.org/search/qtl) have been added, covering a range of important traits: seed characteristics, and fungal and nematode resistance.
  - New [data submission templates](https://peanutbase.org/submit_data) for QTL studies. We would love to work with you if you have such data, published or in process, that you would like to incorporate into PeanutBase!

**(October 2014) Oil quality, nematode and rust resistance traits have been added to Marker Assisted Selection list.**

We have added the following three traits to our list in the [Marker Assisted Selection](https://peanutbase.org/mas) page.
  + [Peanut root-knot nematode](https://peanutbase.org/nematode_root_knot_xa)
  + [Seed oleic acid to linoleic acid ratio](https://peanutbase.org/seed_oleic_to_linol_ratio_xa)
  + [Rust, Puccinia](https://peanutbase.org/rust_puccinia_b03a)

**(September 2014)**

  - The [BLAST](https://peanutbase.org/blast) sequence search tool has been refined at PeanutBase.
<br>The refined utility now includes both protein and nucleotide search against the <i>A. duranensis</i> and <i>A. ipaensis</i> genomes. We also have modified the user interface to look and feel like the most commonly used NCBI BLAST interface.

  - A prototype Marker Assisted Selection (MAS) page.
<br>Here is a prototype MAS page for the trait [Late leaf spot (Phaeoisariopsis personata infection)](https://peanutbase.org/late_leaf_spot_xa) in peanut. We plan to add more Marker Assisted Selection (MAS) pages for various other traits relevant to peanut breeding to include, primarily information on the nearby markers used for MAS and lines carrying the various alleles of the trait. We welcome assistance from our user community having expertise on such traits to contribute information to these trait specific pages. Please [contact](/contact) us for this purpose if you would like to contribute or maintain a MAS page for a specific trait.

**(August 2014)**

  - New sequence-search tool, linking genomic hits to the genome browsers
<br>The [BLAT sequence-search tool](https://peanutbase.org/blat) has been configured to search the <i>A. duranensis</i> and <i>A. ipaensis</i> genome sequences and link genomic hits to the genome browsers.

  - Updated web framework and graphical themes
<br>We have moved from the [Tripal 1](http://www.tripal.info/) / Drupal 6 web framework to [Tripal 2.0a](http://www.tripal.info/news/tripal_2.0a_released) / Drupal 7. This shouldn't affect the content of the site, but will make it easier to add a number of important features - such as an integrated BLAST sequence search module - and to keep up with ongoing Tripal development. Please [let us know](/contact) if you like (or dislike) any aspects of the updated site. We will be adding a lot of features through the coming year, but are eager to hear about features that you would like to have.

  - Redesigned [QTL/trait search](https://peanutbase.org/search/qtl) system and [feature report pages](https://peanutbase.org/feature/Arachis/hypogaea/QTL/arahy.Late%20and%20Early%20leaf%20spot%201-4)

  - Browser synteny between <i>Arachis</i> diploids and other sequenced legumes
<br>Corresponding synteny regions with soybean, common bean, and the model species Medicago truncatela for both [<i>A. duranensis</i>](https://peanutbase.org/gb2/gbrowse/Aradu1.0) and [<i>A. ipaensis</i>](https://peanutbase.org/gb2/gbrowse/Araip1.0).

**(June 2014) Common bean and soybean gene models have been added to the PeanutBase Genome Browser**

We have now enriched the PeanutBase Genome Browser with Glycine max (ver Glyma2.0) and Phaseolus vulgaris (build 1.0) gene models. Some of our users have found this comparison very useful along with the <i>Arachis hypogaea</i> transcripts (Guo et al.) track. Here is a [view of the Genome Browser showing such a comparison](https://peanutbase.org/gb2/gbrowse/Aradu1.0/?start=95781580;stop=95791579;ref=Aradu.A01;width=1024;version=100;flip=0;grid=1;l=assembly_supercontigs%1Earachis_hypogaea_guo%1Eglycine_max_gene_models%1Ephaseolus_vulgaris_gene_models).

**(May 2014)**

  - Pseudomolecule assemblies as 80 column multifasta files are now available for download
<br>We have made available the genome assemblies in a single 80 column multi-FASTA file, one for each diploid genome. These files contain the 10 pseudomolecule sequences in a 80 column format with the scaffold sequences concatenated (after ordering and orienting) and separated by spacer sequences of 10,000 "n"s. This format is compatible with some programs like IGV which requires the sequence lines be of equal width. They are available via our [Genomes](https://peanutbase.org/genomes) (assembly) page and labeled in the corresponding dipoid pages as follows:

|  Aradu_v1.0.fa.gz  |  01-May-2014 14:26  |  251M  |  Pseudomolecules, one file  |
|  Araip_v1.0.fa.gz  |  01-May-2014 14:36  |  338M  |  Pseudomolecules, one file  |

  - BLAST and BLAT: Sequence search features are now available at PeanutBase
<br>Sequence search feature is now available at PeanutBase via BLAST and BLAT utilities. You can search your sequence against <i>Arachis duranensis</i> (assembly ver 1.0) or <i>Arachis ipaensis</i> (assembly ver 1.0) in the [ARACHIS BLAST](https://peanutbase.org/arachis_blast) page (the general purpose NCBI BLAST sequence search utility appropriate for genomic sequences).
<br>OR,
<br>you can use the BLAT alignment tool via the GBrowse pages for [<i>Arachis duranensis</i>](https://peanutbase.org/gb2/gbrowse/Aradu1.0) and [<i>Arachis ipaenensis</i>](https://peanutbase.org/gb2/gbrowse/Araip1.0). The BLAT alignment is recommended for aligning cDNA sequences against the corresponding assembly sequence.
<br>
<br>The steps for BLAT alignment are (at the GBrowse page):
    1. Select "Find Blat Alignment" in the drop-down menu for Configure.
    2. Click "Configure"
    3. In the "Find Blat Alignment" section that opens, enter your (single) sequence in the "Input Sequence to Align" box
    4. Click "Find"

    If a single hit is found, a new track called "BLAT" will be created in the genome browser with your aligned sequence. If multiple hits are found, you'll have to select one from a list of locations.

    If you have questions or need further assistance please [contact us](/contact).

**(April 2014)**

  - Genome Browser is now accessible for the two <i>Arachis</i> diploid progenitors.
<br>Genome Browser tracks are now available for the two diploid progenitor species, [<i>Arachis duranensis</i>](https://peanutbase.org/gb2/gbrowse/Aradu1.0/) and [<i>Arachis ipaensis</i>](https://peanutbase.org/gb2/gbrowse/Araip1.0/). In addition to the scaffold assembly, we have also provided a track with alignment of the <i>Arachis hypogaea</i> transcriptome data ([Guo et al., BMC Genomics 2012, 13:608](http://www.biomedcentral.com/1471-2164/13/608)) on to each of the diploid genomes.
  - Draft genome assemblies for the diploid progenitors of peanut are now available.
<br>Peanut Genome Consortium (PGC) has completed draft genome assemblies for the diploid progenitors of peanut, <i>Arachis ipaensis</i> and <i>Arachis duranensis</i>. These are available via our [Download](/download) page.

**(November-December 2013)**

  - All available QTLs now accessible via a Summary Table
<br>We have compiled and uploaded QTL data sets from 4 publications and now they are available at the [Summary Table of All QTLs](https://peanutbase.org/qtl). More details are available by clicking the QTL and wherever available we have also provided a cmap link to our collaborative site Legume Information System. You can also [search the QTLs](https://peanutbase.org/chado/features?type_id[]=1104) using this search page. Please explore this data and we encourage the community to give us [feedback](/contact) to make this resource more useful as we go along. As we keep compiling more QTL data sets, they will be available here through this summary page. All QTL related resources are accessible via our [QTLs page](https://peanutbase.org/qtl).

  - QTL terms with ontology compiled and available for download
<br>Ontologies will be an integral part at PeanutBase and we are trying to make them consistent with those for other legume species, with specialized terms for peanut where necessary, and with synonyms for existing terms in the literature and in use. This will help towards enabling searches that will integrate trait information for multiple legume species provided by LegumeInfo.org, and will allow integration with other plant genetic databases. As of November, 2013, peanut QTL terms have been collected from published resources and are being aligned/integrated with the trait ontology developed at SoyBase. We have made this evolving resource, [QTL terms with ontology](https://peanutbase.org/files/qtls/Arachis_traits.xls), available for download as an excel spreadsheet. We also welcome and encourage [comments and suggestions](/contact) from the community about this resource.

**(October-November 2013) A New Look for PeanutBase**

  - We have adopted a new theme for the site based on colors from a peanut. If you have suggestions for improvement or find errors, please don't hesitate to send us some [feedback](/contact).
  - The sidebar querying features have been temporarily removed while the database is being loaded.

**(September 2013) Transcriptome assembly projects compiled and a few more QTL reports**

  - A large number of [peanut transcriptome sequencing projects](https://peanutbase.org/transcriptomes) are underway in 2013. We have compiled here these projects (as of September, 2013) and it is downloadable as an Excel file.
  - Seven new [QTL reports](https://peanutbase.org/qtl) are being reviewed and revised before before making them ready for uploading.

**(July-August 2013) QTL and map resources downloadable from one place**

A few [QTL](https://peanutbase.org/qtl) and [map](https://peanutbase.org/maps) resources were compiled with the goal to make them available for download from a single location. These resources will be enhanced through the Tripal's Chado database schema for convenient data sharing with other legume projects using the same schema.

