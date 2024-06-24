/**
 * @fileoverview Ce script gère l'affichage des articles, y compris le filtrage basé sur la recherche,
 * le switch entre les vues liste et mosaïque, et l'affichage des descriptions complètes dans une modale.
 */

    /**
     * @typedef {Object} Article
     * @property {string} title - Le titre de l'article.
     * @property {string} shortDescription - Une courte description.
     * @property {string} fullDescription - La pleine description.
     * @property {string} imageUrl - Adresse de l'image.
     */

    /**
     * La liste des articles affichés.
     * @type {Article[]}
     */
    var articles = [
        // Liste des objets article.
        // Tout les objets contiennent un titre, une shortDescription, une fullDescription et une imageUrl
        {
            title: 'WIKI',
            shortDescription: 'Wikipédia sur les moustaches.',
            fullDescription: `
            <h5>Description d'une Moustache</h5>
            <p>Une moustache est une pousse de poils qui se trouve sur la lèvre supérieure des humains.</p>
            <p>Peu de pathologies affectent la moustache à proprement parler, sinon le développement gênant, voire douloureux (rougeurs, démangeaisons), de pilosités sous-cutanées consécutif au rasage. Il peut être généralement évité par un gommage préventif de la peau avant le rasage, ou, en cas de développement avéré, par une simple friction de la moustache à l’aide d’un gant de crin.</p>
            <h5>Histoire</h5>
            <p>La moustache était fort appréciée avant la Première Guerre mondiale et les Allemandes disaient alors « Ein Kuss ohne Schnurrbart ist wie Suppe ohne Salz », ce qui signifie « Un baiser sans moustache est comme une soupe sans sel ». Le proverbe se retrouve par exemple dans <em>Une famille d'Europe : Récit historique</em> de Jean-Robert Pitte. Mais déjà <em>La Pratique de l’allemand</em> de la méthode Assimil, qui date d’entre les deux guerres, citait encore l’expression mais en parlait comme d’une opinion d’autrefois.</p>
            <p>En France, au cours du xixe siècle, plusieurs décrets rendent obligatoire et réglementent le port de la moustache aux armées et dans la gendarmerie. Ce n'est qu'en 1933, dans la gendarmerie, que ces dispositions sont abolies.</p>
            <p>En 1999 est lancé l'événement Movember qui voit chaque année certains hommes se laisser pousser la moustache pendant le mois de novembre.</p>
        `,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg'
        },
        {
            title: 'Accès',
            shortDescription: 'La moustache dans l’Histoire.',
            fullDescription: `
            <h5>Description d'une Moustache</h5>
            <p>Une moustache est une bande de poils faciaux qui pousse sur la lèvre supérieure. Elle peut varier en épaisseur, longueur, densité et style, et est souvent entretenue et taillée pour maintenir une apparence soignée. Les styles de moustache vont du simple et naturel au complexe et stylisé, incluant des variantes célèbres comme la moustache en guidon, la moustache en fer à cheval, la moustache en brosse à dents, et la moustache en crayon.</p>
            <h5>Histoire de la Moustache</h5>
            <p><strong>Antiquité</strong><br>
            Égypte ancienne : Les Égyptiens de la haute société, y compris les pharaons, portaient souvent de fausses moustaches en métal ou en cheveux tressés, symbole de divinité et de statut.<br>
            Grèce et Rome anciennes : Les Grecs et les Romains de la haute société étaient souvent rasés de près, mais les moustaches et barbes faisaient leur apparition pendant certaines périodes historiques.</p>
            <p><strong>Moyen Âge</strong><br>
            Europe médiévale : La moustache faisait partie des poils faciaux typiques des chevaliers et nobles. Elle était souvent portée avec une barbe et variait selon les tendances de l'époque et les régions.</p>
            <p><strong>Renaissance</strong><br>
            16e-17e siècles : Durant la Renaissance, les moustaches sont devenues très populaires parmi la noblesse européenne. Des styles plus extravagants et soignés ont émergé, reflétant le statut social et le goût personnel.</p>
            <p><strong>19e et Début du 20e Siècle</strong><br>
            Époque victorienne : La moustache a connu un grand regain de popularité parmi les hommes européens et américains. Les styles étaient souvent associés à la virilité et à l'autorité.<br>
            Début du 20e siècle : De nombreuses figures militaires, politiques et artistiques portaient des moustaches distinctives. Par exemple, le Kaiser Guillaume II d'Allemagne et le peintre Salvador Dalí.</p>
            <p><strong>20e Siècle à Aujourd'hui</strong><br>
            Années 1920-1930 : La moustache brosse à dents, popularisée par Charlie Chaplin et Adolf Hitler, est devenue un symbole distinctif, bien que plus tard controversé en raison de son association avec Hitler.<br>
            Années 1970-1980 : La moustache a été un élément clé du style masculin, particulièrement en Amérique du Nord, souvent associée à des icônes de la musique, du sport et du cinéma.<br>
            Aujourd'hui : La moustache a connu un renouveau grâce à des mouvements comme Movember, une initiative de sensibilisation à la santé masculine. Les styles de moustache sont variés et souvent portés pour des raisons esthétiques ou comme une déclaration de mode.</p>
        `,
            imageUrl: 'https://www.journalacces.ca/wp-content/uploads/2022/11/Salvador_Dali_NYWTS-scaled.jpeg'
        },
        {
            title: 'La fabrique culturelle',
            shortDescription: 'Barbes, moustaches et identité sociale.',
            fullDescription: `<video width="465" controls>
        <source src="/assets/videos/video.mp4" type="video/mp4">
    </video>`,
            imageUrl: 'https://images.tele.quebec/lafabriqueculturelle/capsules/013277/contents/013549/48x25/w1920_h1000.jpg'
        },
        {
            title: 'MOVEMBER',
            shortDescription: 'Les hommes meurent trop jeunes.',
            fullDescription: `
            <h5>Nos Missions</h5>
            <p>Nos pères, nos conjoints, nos frères et nos amis font face à une crise en santé dont personne ne parle. Les hommes meurent trop jeunes. Nous ne pouvons pas rester sans rien dire.</p>
            <p><strong>VOILÀ POURQUOI NOUS AGISSONS.</strong></p>
            <p>Nous sommes la plus importante œuvre de charité changeant la face de la santé masculine. Nous savons ce qui fonctionne ou ne fonctionne pas auprès des hommes.</p>
            <p>Cancer de la prostate, cancer testiculaire, santé mentale et prévention du suicide - nous nous y attaquons.</p>
            <p>Depuis 2003, Movember a financé plus de 1 250 projets en santé masculine dans le monde entier, remettant en cause le statu quo, bouleversant la recherche sur la santé des hommes et transformant la façon dont les services de santé rejoignent et soutiennent les hommes.</p>
            <p>Nous savons ce qui fonctionne pour les hommes. Nous savons comment trouver et financer les recherches les plus novatrices pour exercer une influence à la fois locale et mondiale. Nous défions constamment le statu quo et nous investissons rapidement dans les projets qui portent des fruits. En 15 ans, nous avons financé plus de 1 250 projets en santé masculine dans le monde.</p>
            <p>D'ici 2030, nous réduirons de 25% le nombre de décès prématurés chez les hommes.</p>
        `,
            imageUrl: 'https://ca.movember.com/uploads/images/resources/38ffd4b8d03dba46a1d8f188aeaac289ccafea71-large.webp'
        },
        {
            title: 'LOréal Paris',
            shortDescription: 'Votre guide pour une magnifique moustache.',
            fullDescription: `
            <p>Pendant des décennies, tant de célébrités hollywoodiennes ont affiché d’élégantes moustaches. Et avec la popularité grandissante de Movember, le look influence les hommes chaque année. Si vous avez déjà porté la moustache, vous savez sans doute qu’il ne suffit pas de simplement cesser de se raser. En réalité, vous ne gagnez pas de temps. Au contraire, vous devez en mettre, car soigner votre apparence demande des efforts. Quel que soit le style que vous choisissiez, il faut un peu d’entraînement pour que votre moustache ait fière allure et affiche un air de santé. Avec les conseils présentés ici et quelques produits bien choisis, votre tâche sera plus aisée.</p>
            <h5>Lavez votre moustache</h5>
            <p>Vous shampouinez vos cheveux régulièrement, et vous devriez en faire autant avec votre moustache, car de l’huile et d’autres saletés peuvent s’y accumuler, sans compter les restes de nourriture (ce n’est pas l’endroit idéal où les conserver). Lorsque vous lavez votre visage, assurez-vous de nettoyer également votre pilosité faciale, puis rincez avec soin. La bonne nouvelle, c’est qu’il existe des produits pour tous vos besoins de nettoyage, comme le nettoyant 3 en 1 BarberClub pour barbe, visage et cheveux de L’Oréal Paris.</p>
            <h5>Exfoliez votre moustache</h5>
            <p>Vous remarquerez peut-être que, sous votre moustache, votre peau est sèche (et peut-être même squameuse) ou que des poils incarnés s’y dissimulent. Le mieux est d’utiliser un nettoyant en profondeur une fois par semaine pour éliminer les cellules mortes de la peau, ce qui préviendra le développement de poils incarnés. Essayez le nettoyant au charbon Men Expert Hydra Energetic de L’Oréal Paris pour garder votre peau à la hauteur de votre style.</p>
            <h5>Rasez et taillez votre moustache pour qu’elle reste soignée</h5>
            <p>Que vous choisissiez vous-même le style de votre moustache ou que vous vous en remettiez à votre barbier, si vous en prenez soin régulièrement, vous aurez une allure soignée et impeccable en permanence, loin du look « homme des cavernes ». Tout comme vous n’utiliseriez pas un motoculteur pour entretenir les plantes délicates de votre jardin, vous ne devriez pas vous contenter d’un coupe-cheveux pour tailler votre moustache. Investissez plutôt dans une tondeuse à barbe : cet outil assure plus de précision. Et pour les poils follets, servez-vous de ciseaux de manucure. Astuce : utilisez une crème à raser transparente ou en gel comme la crème de rasage BarberClub de L’Oréal Paris plutôt qu’une crème moussante afin de mieux voir où vous rasez. En prime : une crème de rasage aidera à réduire l’irritation et la formation de boutons. Concluez avec l’application d’un après-rasage comme l’après-rasage réparateur BarberClub de L’Oréal Paris qui contribuera à apaiser votre peau.</p>
            <h5>Revitalisez votre moustache</h5>
            <p>Vous ne revitalisez pas toujours vos cheveux? Dans le cas de votre moustache, vous devrez être plus assidu et la garder bien hydratée et revitalisée. La peau sous votre moustache peut souvent s’assécher et s’écailler (oui, il s’agit de pellicules de moustache). L’application quotidienne d’un hydratant ne suffira pas puisque ce produit ne pénètre généralement pas la barrière de poils pour atteindre la peau. Le produit idéal est un hydratant ou une huile à barbe non grasse comme l’huile visage et barbe BarberClub de L’Oréal Paris, enrichie d’huile essentielle de bois de cèdre. Toute désignée pour cette fonction, cette huile sera absorbée par la peau sous votre moustache, comme il se doit.</p>
            <h5>Peignez-la</h5>
            <p>L’époque où vous quittiez la maison les cheveux en bataille est depuis longtemps révolue. Il ne devrait pas en être autrement pour la moustache. Ajoutez à votre rituel du matin un coup de peigne aux poils de moustache. Vous délogerez non seulement les cellules mortes et autres débris, mais vous mettrez chaque poil à sa place pour une allure soignée.</p>
            <h5>Moustache cirée, moustache stylée</h5>
            <p>Si le style de votre moustache demande un peu plus d’attention, ou si vous la désirez plus longue, une cire pour moustache comme le coiffant barbe et cheveux BarberClub de L’Oréal Paris sera utile. Cette crème coiffante disciplinera vos poils et les gardera soignés, pour un maximum de style et de définition. Vous serez étonné de savoir que même les moustaches à poil court ont besoin d’être disciplinées.</p>
        `,
            imageUrl: 'https://resize.elle.fr/original/var/plain_site/storage/images/people/la-vie-des-people/news/homme-celebre-a-moustache/73380587-1-fre-FR/homme-celebre-a-moustache.jpg'
        },
        {
            title: 'Fendrihan',
            shortDescription: '<a href="https://www.fendrihan.com/">Fendrihan</a>',
            fullDescription: `
            <h5>Notre Mission</h5>
            <p>Depuis 2007, nous sommes le principal détaillant en ligne de rasage et de toilettage en Amérique du Nord, offrant les meilleurs essentiels de rasage pour hommes, des produits de toilettage et des accessoires pour la vie quotidienne que vous ne trouverez nulle part ailleurs. Nous travaillons dur pour offrir les produits de rasage les plus excellents de marques bien établies en un seul endroit pratique, à des prix imbattables.</p>
            <p>Notre objectif est de donner à chaque homme l'expérience de toilettage complète avec des produits adaptés à des styles individuels. Que ce soit en vous aidant à découvrir votre parfum de cologne signature, en améliorant votre expérience de rasage et de toilettage, ou en vous fournissant la mallette en cuir parfaite, nous voulons que chaque homme ait l'air, se sente et exude l'image d'un gentleman classique.</p>
            <h5>Pourquoi acheter chez nous ?</h5>
            <p>Le rasage est notre passion. Nous explorons continuellement le monde pour vous apporter des produits de rasage et de toilettage de luxe soigneusement sélectionnés ainsi que des accessoires. Nous sommes également fiers de travailler avec des artisans talentueux pour fournir notre ligne Fendrihan de pièces performantes et abordables.</p>
            <p>En matière de rasage et de toilettage, nous avons découvert que l'utilisation des bons outils transformera ces tâches nécessaires - mais souvent monotones - en activités agréables et relaxantes que chaque homme peut apprécier. Que vous soyez un adepte des produits traditionnels ou que vous cherchiez à essayer quelque chose de nouveau et moderne, notre collection a tout pour plaire.</p>
            <h5>Promesse de Qualité</h5>
            <p>Nous vous apportons le meilleur du monde. Des incontournables du rasage classique allemand, des produits excellents du quartier historique des barbiers de Londres, des joyaux cachés du Portugal et de l'Espagne, et bien sûr, notre propre ligne de produits Fendrihan, c'est ce que vous trouverez en parcourant notre collection.</p>
            <p>Nos produits sont choisis pour ravir nos clients, et toutes nos marques partagent des traits communs : des produits de haute qualité avec une réputation respectée.</p>
            <h5>Livraison nationale et internationale</h5>
            <p>Les commandes sont expédiées, 5 jours par semaine, depuis notre établissement de Largo, en Floride.</p>
            <p>Les commandes éligibles aux États-Unis bénéficient de la livraison gratuite avec un achat minimum.</p>
        `,
            imageUrl: 'https://m.media-amazon.com/images/I/61ItUSwKteL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            title: 'GQ',
            shortDescription: 'Les femmes aiment-elles les moustaches ?',
            fullDescription: `
            <p>C’est le bon moment pour arrêter de vous raser la moustache. D’après un sondage mené par l’application de rencontres PlentyOfFish, et relevé par le magazine Maxim, 64% des femmes interrogées considèrent que les hommes qui participent au Movember sont plus attirants que les autres. Sur les 500 femmes célibataires questionnées, 20% ont expliqué qu’elles trouvaient les moustaches sexy. 33,9% pensent que ce type de pilosité rend les hommes plus matures. 22,3% des femmes estiment qu’une moustache fait ressortir la masculinité.</p>
            <p>Chaque année, la Movember Foundation Charity incite les hommes à ne pas se raser la moustache afin de sensibiliser l’opinion publique concernant des maladies comme le cancer de la prostate et de lever des fonds pour la recherche.</p>
        `,
            imageUrl: 'https://static01.nyt.com/images/2020/10/18/magazine/18mag-mustache/18mag-mustache-mediumSquareAt3X.jpg'
        },
        {
            title: 'Le Monde diplomatique',
            shortDescription: 'En 1907, ouvriers boulangers et limonadiers se rebiffent. La moustache pour tous !',
            fullDescription: `
            <p>Des travailleurs luttant contre la grande précarité, des clients « pris en otage », des syndicats dont on conteste la légitimité à parler au nom des travailleurs, des contre-arguments aux « réalités économiques » et des enjeux plus larges que la lutte particulière pour les deux camps... Cette petite musique semble familière ? Peut-être. Sauf qu’en cette année 1907 le conflit porte sur le droit à la moustache.</p>
            <p>La moustache, c’est du sérieux. On n’en rigole pas. Guy de Maupassant fait dire à l’héroïne de <em>La Moustache</em> : « Vraiment un homme sans moustache n’est plus un homme (…). La moustache est indispensable à une physionomie virile. Non, jamais tu ne pourrais imaginer comme cette petite brosse de poils sur la lèvre est utile à l’œil et aux relations entre époux. » Enfin, la moustache… plutôt les moustaches, avec ses classifications savantes, ses déclinaisons, ses sous-groupes : à la gauloise, populaire et ramasse-soupe, l’aristo pointue ou la guidon de vélo qu’on modèle avec de la cire. Une enquête s’est même penchée sur la prédisposition à la moustache chez les dictateurs. Rien de concluant cependant : si 42 % des potentats portent du poil sous le nez, la raison en est souvent que cela se fait dans leur pays.</p>
            <p>Le 17 avril 1907, les troupes françaises ont envahi Oujda, au Maroc, Rudyard Kipling a obtenu le prix Nobel de littérature, et les Parisiens profitent des premiers beaux jours. Ils se ruent sur les terrasses des brasseries des grands boulevards. C’est là, à 18 h 30, que débute par surprise la grève de la moustache. Pile à la demie, les garçons de café arrêtent de saisir les commandes, encaissent les consommations. Ils filent au comptoir prendre leur solde, rendent les tabliers et quittent les brasseries. Ils se retrouvent par petits groupes sur les trottoirs sous les regards incrédules et amusés des consommateurs étonnés de ce mouvement social loin des usines.</p>
            <p>Les patrons replient la terrasse pour fermer boutique au Café de la Paix, baissent le rideau de fer au Café Riche et coupent la lumière à L’International pour faire partir la clientèle qu’on ne peut plus servir. Chaises sur les tables. Plus un verre n’est rempli au Buffet de la gare de Lyon, plus un bouchon n’est tiré au Café Cardinal, plus une table n’est débarrassée à L’Américain. La fête est finie.</p>
            <p>Ainsi commence la grève des ouvriers limonadiers restaurateurs.</p>
            <p>Le lendemain, la presse (...)</p>
        `,
            imageUrl: 'https://www.retronews.fr/sites/default/files/carcassonne_slogans_1907.jpg'
        },
        {
            title: 'Le Monde',
            shortDescription: 'À quoi servent les moustaches du chien ?',
            fullDescription: `
            <p>Présentes chez de nombreux mammifères terrestres et marins, les “moustaches” ou vibrisses jouent un rôle important pour les chiens, les chats, les rats, mais aussi les phoques ou les baleines. Ce poil si particulier est un véritable récepteur capable d’informer le chien sur son environnement ou sur sa propre position dans son environnement. Lorsque l’on sait que chez le cerveau du chien, 40% de l’information tactile est dédiée à sa mâchoire supérieure, on comprend vite que les “moustaches du chien” ne sont pas des poils comme les autres.</p>
            <h5>À quoi servent les moustaches du chien ?</h5>
            <h6>Des poils pas comme les autres</h6>
            <p>Qu'elles soient sur les lèvres, joues, museau, menton, les vibrisses - communément appelées “moustaches du chien” - sont des poils un peu particuliers pour notre ami de quatre pattes. Tandis que les poils qui constituent le pelage les protègent du froid et pour certaines races, de la chaleur, les vibrisses sont des organes sensoriels indispensables à sa survie. 4 à 5 fois plus longues qu’un poil, elles sont composées de kératine. Elles sont aussi plus épaisses, plus raides et capables de bouger. Très réceptives aux vibrations et à la pression, ces poils spécialisés dans les fonctions sensorielles de nombreux mammifères et même des oiseaux, sont formés d’une racine et d’un bulbe. C’est dans ce bulbe pilaire que se trouvent des mécanos récepteurs. Une autre particularité de la vibrisse est qu’elle est constituée de fibres musculaires qui se contractent et lui permettent de bouger. Des vibrisses sont également présentes au-dessus des yeux de votre chien.</p>
            <h6>Le rôle des vibrisses pour votre compagnon canin</h6>
            <p>Si contrairement au chat, le chien ne possède pas de vibrisses sous ses coussinets, ces dernières sont indispensables à l’animal qui possède une mauvaise vue : il est myope. Elles compensent ainsi un sens moins développé chez notre ami de quatre pattes. Bien que l’odorat soit extrêmement performant chez le chien, il n’est pas suffisant pour appréhender son espace, chasser et se repérer. Les vibrisses assurent donc plusieurs rôles sensoriels :</p>
            <h6>La proprioception et l’orientation</h6>
            <p>La proprioception, c’est la conscience que nous avons de notre propre corps dans l’espace. Le chien a aussi besoin de ce sens pour évoluer dans la nature. Il sait ainsi s’il se trouve des obstacles sur son chemin, s’il peut passer sous la clôture, dans un fourré, dans le terrier si tentant qui lui apporte de délicieux effluves. Ses moustaches le guident de jour comme de nuit, pour se mouvoir et pour repérer ce qui l’entoure. De plus, ses vibrisses lui indiquent où vous vous trouvez dans la pièce, qui est avec vous. Elles lui indiquent également où se trouve un animal, qu’il s’agisse d’un compagnon ou d’une proie.</p>
            <h6>La détection des mouvements</h6>
            <p>Organe sensoriel incroyable, ces poils raides et longs captent les vibrations, les tremblements, les courants d’air. Tandis que notre œil repèrera plus facilement un mouvement si tout autour est immobile, le chien capte le battement d’ailes d’une mouche. Cette sensibilité de ses vibrisses permet à l’animal d’anticiper les mouvements beaucoup plus rapidement. Le chien peut alors ressentir un danger ou l’approche de votre main sur son encolure bien plus vite que vous n’exécuterez votre geste. Dextérité et excellents réflexes dans le jeu proviennent en partie de l’extrême sensibilité de cet organe sensoriel.</p>
            <h6>La compréhension des formes et des textures</h6>
            <p>Si nous perdons la faculté, adulte, de reconnaître texture et forme d’un objet en le mettant à la bouche comme lorsque nous étions bébé, chez le chien, les vibrisses assurent cette fonction tout au long de sa vie. Lorsque votre chien renifle une piste, ce n’est pas seulement son odorat qui travaille, mais aussi ses moustaches. Lorsqu’un chien souffre de cécité totale ou partielle, les vibrisses lui permettent d’appréhender son environnement et d’évoluer en toute sécurité dans un lieu connu.</p>
            <h6>L’estimation des distances</h6>
            <p>Autre avantage qui fait de nos chiens les champions du jeu ou de la chasse, les vibrisses indiquent à l’animal si l’objet se rapproche ou s’éloigne. Comme nous l’avons vu plus haut, la détection des vibrations, plus son odorat développé permettent à nos canidés d’être des pisteurs hors pair.</p>
            <h6>Le saviez-vous ?</h6>
            <p>Les poils situés au niveau de nos narines antérieures sont aussi nommés vibrisses. Plus raides, ils fournissent une première barrière protectrice à notre appareil respiratoire contre la poussière, des allergènes et les bactéries.</p>
            <h6>Les vibrisses du chien, un radar de sécurité ?</h6>
            <p>Comme nos sourcils, les vibrisses situées au-dessus des yeux de votre chien servent à le protéger des poussières et des saletés. Contrairement à nous qui clignons des yeux en voyant s’approcher un danger, ce sont ses vibrisses qui le préviennent et entraînent chez lui l’action de cligner des yeux.</p>
            <h6>Les vibrisses, un sens du toucher particulier dont il faut prendre soin</h6>
            <p>Les moustaches du chien représentent à elles seules 40 % de l’information tactile qu’il reçoit. Coussinets, truffe et peau n’ont pas une aire aussi développée dans le cerveau de notre animal de compagnie. Cet organe sensitif ne doit donc pas être arraché. C’est grâce aux vibrisses que le chien s’oriente et détecte objets, personnes et dangers qui l’entourent. Couper ses moustaches, c’est retirer un sens essentiel à son équilibre, car il éprouvera, jusqu’à ce qu’elles repoussent, du mal à évaluer les distances et à détecter les mouvements. Il peut arriver que vous retrouviez, sur votre canapé ou dans son panier, quelques vibrisses. Tout comme son pelage, les vibrisses se renouvellent. Cependant, si vous constatez une perte importante accompagnée d’un changement d’attitude de votre chien, il est préférable de consulter votre vétérinaire afin de vous assurer qu’une infection n’est pas responsable de la perte de ses vibrisses.</p>
        `,
            imageUrl: 'https://jardinage.lemonde.fr/images/dossiers/2022-10/vibrisses-chien-093337.jpg'
        },
    ];


document.addEventListener('DOMContentLoaded', function() {
    /** Nous ne devrions plus utiliser var */
    /**
     * Conteneur pour les articles affichés.
     * @type {HTMLElement}
     */
    const articleContainer = document.getElementById('articleContainer');
    
    /**
     * Champ de saisie pour la recherche dans les articles.
     * @type {HTMLInputElement}
     */
    const searchInput = document.getElementById('searchInput');
    
    /**
     * Élément affichant le compteur du nombre d'articles trouvés.
     * @type {HTMLElement}
     */
    const articleCounter = document.getElementById('articleCounter');
    
    /**
     * Interrupteur pour switch entre la vue liste et la vue mosaïque.
     * @type {HTMLInputElement}
     */
    const viewSwitch = document.getElementById('flexSwitchCheckDefault');
    
    /**
     * 
     * @type {HTMLElement}
     */
    const viewSwitchLabel = document.querySelector('label[for="flexSwitchCheckDefault"] p');
    
    /**
     * Inscrit les infos d'origine pour la vue "mosaïque".
     * @type {string[]}
     */
    const originalArticlesHTML = [];

    /**
     * Affiche les articles dans le conteneur avec les infos spécifiées.
     * @param {Object} article 
     * @param {number} index 
     */
    articles.forEach(function(article, index) {
        var col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4 article-card p-3 bg-warning-subtle border border-3 border-warning rounded-3 shadow';
        col.setAttribute('data-title', article.title.toLowerCase());
        col.setAttribute('data-description', article.shortDescription.toLowerCase());
        /** la demonstation est faite mais l'image ne change pas de format. Le contexte dans lequel est demontré la technique n'est pas la bonne. L'image est deja petite parce nous sommes dans un carte. L'ordre des sources n'est pas la bonne. */
        col.innerHTML = `
            <picture>
                <source media="(max-width: 685px)" srcset="${article.imageUrl}?w=150">
                <source media="(max-width: 768px)" srcset="${article.imageUrl}?w=300">
                <source media="(min-width: 1024px)" srcset="${article.imageUrl}?w=400">
                <img src="${article.imageUrl}" class="img-fluid rounded mb-3" alt="Image de l'article">
            </picture>
            <div class="article-content">
                <h5>${article.title}</h5>
                <p>${article.shortDescription}</p>
                <button class="btn btn-primary" data-index="${index}">En lire plus!</button>
            </div>
        `;

        originalArticlesHTML.push(col.outerHTML);
        articleContainer.appendChild(col);
    });

    /**
     * 
     * @param {Event} event - 
     */
    articleContainer.addEventListener('click', function(event) {
        if (event.target.matches('button.btn-primary')) {
            var index = event.target.getAttribute('data-index');
            var article = articles[index];
            var modalContent = document.getElementById('modalContent');
            modalContent.innerHTML = `
                <div class="modal-header">
                    <h5 class="modal-title" id="articleModalLabel">${article.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
                </div>
                <div class="modal-body">
                    <picture>
                        <source media="(max-width: 685px)" srcset="${article.imageUrl}?w=150">
                        <source media="(max-width: 768px)" srcset="${article.imageUrl}?w=300">
                        <source media="(min-width: 1024px)" srcset="${article.imageUrl}?w=400">
                        <img src="${article.imageUrl}" class="img-fluid rounded mb-3" alt="Image de l'article">
                    </picture>
                    <div class="article-content">${article.fullDescription}</div>
                </div>
            `;
            var articleModal = new bootstrap.Modal(document.getElementById('articleModal'), {
                backdrop: true,
                keyboard: true
            });
            articleModal.show();
        }
    });

    /**
     * 
     * @param {number} count - 
     */
    function updateArticleCounter(count) {
        articleCounter.textContent = `${count} articles trouvés`;
    }

    /**
     * Filtre les articles en fonction de la valeur de recherche saisie.
     */
    function filterArticles() {
        var searchValue = searchInput.value.toLowerCase();
        var articleCards = document.querySelectorAll('.article-card');
        var foundCount = 0;

        articleCards.forEach(function(card) {
            var title = card.getAttribute('data-title');
            var description = card.getAttribute('data-description');

            if (title.includes(searchValue) || description.includes(searchValue)) {
                card.classList.remove('d-none');
                foundCount++;
            } else {
                card.classList.add('d-none');
            }
        });

        updateArticleCounter(foundCount);
    }

    // 
    searchInput.addEventListener('input', filterArticles);
    // 
    filterArticles();

    /**
     * 
     */
    viewSwitch.addEventListener('change', function() {
        var isChecked = viewSwitch.checked;
        if (isChecked) {
            articleContainer.classList.add('list-view');
            viewSwitchLabel.textContent = 'Liste';
            document.querySelectorAll('.article-card').forEach(function(card) {
                card.classList.add('list-item');
            });
        } else {
            articleContainer.innerHTML = originalArticlesHTML.join('');
            articleContainer.classList.remove('list-view');
            viewSwitchLabel.textContent = 'Mosaïque';
            document.querySelectorAll('.article-card').forEach(function(card) {
                card.classList.remove('list-item');
            });
        }
    });

    
    if (viewSwitch.checked) {
        articleContainer.classList.add('list-view');
        viewSwitchLabel.textContent = 'Liste';
    } else {
        articleContainer.classList.remove('list-view');
        viewSwitchLabel.textContent = 'Mosaïque';
    }

    /** js doc inutile */

    /**
     * Gère l'événement de fermeture de l'élément offcanvas pour supprimer la superposition.
     */
    var offcanvasElement = document.getElementById('offcanvas');
    offcanvasElement.addEventListener('hidden.bs.offcanvas', function () {
        var backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    });

    /** js doc inutile */

    /**
     * Gère les clics en dehors de l'élément offcanvas pour le fermer.
     */
    document.addEventListener('click', function(event) {
        var offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvas'));
        if (offcanvas && event.target.classList.contains('offcanvas-backdrop')) {
            offcanvas.hide();
            var backdrop = document.querySelector('.offcanvas-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
        }
    
    });
});
