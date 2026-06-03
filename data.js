const OCUPATIONS = [
    {
        name: "Alienista",
        description:
            "Especialista em doenças mentais, você pode ser um psicanalista formado em Viena, um neurologista que estuda o funcionamento do cérebro, ou um médico com um forte interesse em ciência comportamental. Embora as teorias freudianas estejam começando a dominar o campo, elas estão longe de serem universalmente compreendidas ou aceitas.",
        ocupationalSkills: [
            "Avaliar Honestidade",
            "Biologia",
            "Farmácia",
            "Idiomas (Alemão e Latim)",
            "Medicina",
            "Psicanálise",
            "Usar Biblioteca",
            "duas outras Habilidades Interpessoais (à escolha)",
        ],
        credito: [3, 4],
        specialSkills: [
            "Acesso a relatórios mentais e enfermarias psiquiátricas usando Medicina ou Habilidade Interpessoal.",
            "Testes de Psicanálise para Triagens Psicológicas com Dificuldade 3 (ao invés de 4).",
            "Gasta apenas 1 ponto de Psicanálise (ao invés de 2) para estabilizar um personagem confuso.",
            "Pode recuperar a própria Estabilidade, mas só 1 ponto para cada ponto de Psicanálise gasto.",
            "Pode usar Avaliar Honestidade como psicologia forense para construir perfis criminais.",
            "Pode gastar Pontos de Criação para utilizar a habilidade Hipnose.",
        ],
        img: "assets/alienista.jpg"
    },
    {
        name: "Antiquário",
        description:
            "Tanto um estado de espírito quanto uma profissão, você valoriza o passado e mergulha de bom grado nele. Você pode ter uma renda pequena e independente, pode ser um estudioso residente em um museu ou galeria, ou poderá negociar antiguidades, livros, ou objetos de arte de uma época mais sublime.",
        ocupationalSkills: [
            "Arquitetura",
            "Barganha",
            "Direito",
            "História",
            "História da Arte",
            "Idiomas",
            "Usar Biblioteca",
            "uma Habilidade General como especialidade pessoal",
        ],
        credito: [2, 5],
        specialSkills: [
            "Uma vez por aventura, pode possuir um item informativo ou adequado para a investigação em curso 'em sua loja' (livros, armas ornamentais, artefatos estranhos, etc.).",
            "Para lembrar e descobrir esse item, é necessário usar a habilidade correspondente (ex: História da Arte ou Usar Biblioteca).",
            "O Guardião pode negar a posse de artefatos poderosos do Mythos ou itens que pareçam abusivos.",
        ],
    },
    {
        name: "Andarilho",
        description:
            "Você é mais um dos milhões de desempregados na Depressão. Você é de uma classe discriminada, um rei das estradas. Você anda pelos trilhos para evitar a sociedade, procurando esmolas e trabalho somente quando necessário. Você pode ser um ladrão ocasional, mas não se tornaria um profissional se pudesse ter qualquer outro trabalho.",
        ocupationalSkills: [
            "Atletismo",
            "Barganha",
            "Furtividade",
            "Manha",
            "Punga",
            "Sentir Perigo",
            "Sobrevivência",
        ],
        credito: [0, 0],
        specialSkills: [
            "Pode usar Sentir Perigo ou Manha para decifrar os sinais dos Andarilhos e descobrir como funcionam as coisas em uma cidade estranha.",
            "Pode usar Manha para acionar contatos com companheiros Andarilhos.",
        ],
    },
    {
        name: "Arqueólogo",
        description:
            "Você viaja a lugares estranhos e afastados para descobrir o passado. Você pode ser um estudioso meticuloso, que trabalha em bibliotecas e dedica sua carreira a uma única escavação, ou pode ser pouco mais do que um ladrão de túmulos, empunhando um chicote e uma pistola para trazer troféus ao museu.",
        ocupationalSkills: [
            "Arqueologia",
            "Atletismo",
            "Coletar Evidência",
            "Equitação",
            "História",
            "Idiomas",
            "Primeiros Socorros",
            "Usar Biblioteca",
            "duas outras Habilidades Generals (à escolha)",
        ],
        credito: [4, 5],
        specialSkills: [
            "Usando Arqueologia ou uma Habilidade Interpessoal adequada, pode ter acesso aos depósitos de museus ou ser autorizado a manusear artefatos.",
            "Com credenciais acadêmicas (2+ pontos em Arqueologia e 3+ em Crédito), pode ter acesso a acervos restritos em biblioteca universitária.",
        ],
    },
    {
        name: "Artista",
        description:
            "Se você é um pintor, um músico, um escultor, um arquiteto, ou mesmo um ator, você segue a sua Musa para onde ela o conduzir. Sensível e temperamental, seja pela reputação ou de fato, você já habita um submundo que a maioria não compreende.",
        ocupationalSkills: [
            "Arquitetura",
            "Arte",
            "Avaliar Honestidade",
            "Bajulação",
            "Disfarce",
            "Fotografia",
            "História da Arte",
            "Ofício",
            "duas outras Habilidades Acadêmicas ou Interpessoais como especialidades pessoais",
        ],
        credito: [1, 4],
        specialSkills: [
            "Pode recuperar 1 ponto de reserva em uma habilidade que representa sua forma de arte (Arte, Arquitetura, Escultura, Fotografia, etc.) durante qualquer tempo de ociosidade em uma aventura, até 4 vezes por sessão.",
            "O Guardião pode não permitir isso caso o artista não tenha tido tempo ou recursos para polir sua habilidade.",
        ],
    },
    {
        name: "Autor",
        description:
            "Você usa as palavras para capturar a existência, para esconder a si mesmo, para revelar a verdade, ou para vender fantasia para leitores vítimas da Depressão. Seu trabalho é solitário e as recompensas esporádicas. Com disciplina e um pouco de habilidade, mesmo um escritor pulp consegue se sustentar.",
        ocupationalSkills: [
            "Arte",
            "Avaliar Honestidade",
            "História",
            "História Oral",
            "Idiomas",
            "Usar Biblioteca",
            "três outras habilidades como especialidades pessoais ou resquícios de empregos anteriores",
        ],
        credito: [1, 3],
        specialSkills: [
            "Pode usar qualquer tempo de inatividade em uma aventura para recuperar 1 ponto de reserva em uma Habilidade Acadêmica, até 4 vezes por sessão.",
            "Representa o tempo gasto lendo, verificando notas e arquivos.",
            "O Guardião pode não permitir isso caso o Investigador não tenha tempo ou recursos para a leitura necessária.",
        ],
    },
    {
        name: "Cientista",
        description:
            "Você procura evoluir a ciência, talvez para melhorar o mundo, ou talvez para trazer à tona alguma verdade há muito negada. Você pode se considerar habilidoso no laboratório; e aquele terceiro incêndio poderia ter acontecido com qualquer um. Você só precisa de mais equipamentos, mais tempo, mais amostras, e de mais colegas compreensivos.",
        ocupationalSkills: [
            "Coletar Evidência",
            "Fotografia",
            "Idiomas",
            "Reparos Elétricos",
            "Usar Biblioteca",
            "dois dos seguintes: Astronomia, Biologia, Ciência Forense, Criptografia, Física, Geologia ou Química",
        ],
        credito: [3, 5],
        specialSkills: [
            "Tem acesso a um laboratório apropriado para suas pesquisas.",
            "Pode usar Crédito para conseguir testes realizados em outros laboratórios, ou para obter equipamentos especializados.",
            "Com credenciais acadêmicas (Crédito 3+ e 2+ em Astronomia, Biologia, Química, Geologia ou Física), pode acessar o acervo restrito de uma biblioteca universitária.",
        ],
    },
    {
        name: "Clero",
        description:
            "Pregador itinerante da renovação, padre confiável do bairro, rabino erudito, ou missionário ansioso — as variedades da vida clerical apresentam muitos desafios. Você pode estar predisposto a acreditar no sobrenatural, mas é particularmente vulnerável às revelações perturbadoras do Mythos.",
        ocupationalSkills: [
            "Avaliar Honestidade",
            "Convencimento",
            "História",
            "Idiomas (Latim, Grego, Aramaico ou Hebraico)",
            "Psicanálise",
            "Teologia",
            "Usar Biblioteca",
            "outra Habilidade Interpessoal",
        ],
        credito: [2, 5],
        specialSkills: [
            "Usando Teologia ou Convencimento, pode ter acesso a registros da igreja geralmente não disponíveis ao público.",
            "Uma vez por sessão, pode livremente recuperar qualquer reserva de Habilidade Interpessoal conversando com um correligionário (que não seja um Investigador companheiro).",
            "Psicanálise não é uma Habilidade Ocupacional, mas testes de Psicanálise para Triagens Psicológicas são feitos com Dificuldade 3.",
            "Um padre pode abençoar água benta, usar extrema-unção, usar crucifixos contra vampiros, e exorcizar demônios (não entidades do Mythos) em uma disputa de Estabilidade.",
        ],
    },
    {
        name: "Criminoso",
        description:
            "Aqueles que vivem do outro lado da lei já conhecem um mundo secreto de degeneração, desespero e mal, fora da normalidade da civilização. Alguns criminosos construíram seus próprios códigos e leis para se protegerem da constatação de que toda a ordem humana é frágil.",
        ocupationalSkills: [
            "Arrombamento",
            "Barganha",
            "Briga",
            "Furtividade",
            "Intimidação",
            "Manha",
            "Perseguição",
            "Sentir Perigo",
            "outra Habilidade Interpessoal ou Técnica como especialidade pessoal",
        ],
        credito: [0, 4],
        specialSkills: [
            "Com reservas de ponto em Ocultação, Perseguição ou Punga, pode gastar pontos após a rolagem do dado: a cada 2 pontos gastos, aumenta o resultado em 1.",
            "Só se aplica sem distrações e sem ser diretamente observado. Nunca se aplica durante uma disputa.",
            "Membros da Máfia podem ter 1 ponto gratuito em Idiomas (Italiano).",
        ],
    },
    {
        name: "Detetive Particular",
        description:
            "Há coisas que os policiais não podem fazer e há coisas que os policiais não vão fazer, e você vai ganhar dinheiro para fazê-las. Às vezes é arrastado para algo no qual os policiais querem que você fique fora, mas você permanece lá para mantê-los honestos.",
        ocupationalSkills: [
            "Arrombamento",
            "Avaliar Honestidade",
            "Briga",
            "Condução",
            "Contabilidade",
            "Convencimento",
            "Direito",
            "Disfarce",
            "Fotografia",
            "Perseguição",
        ],
        credito: [2, 3],
        specialSkills: [
            "Com reservas de ponto em Disfarce ou Perseguição, pode gastá-los após rolar o dado: a cada 2 pontos gastos, aumenta o resultado em 1.",
            "Só se aplica sem distrações e sem ser diretamente observado. Nunca se aplica durante uma disputa.",
            "Variante Pulp (estilo Chandler-Hammett): substitua habilidades por Arrombamento, Avaliar Honestidade, Briga, Condução, Intimidação, Perseguição, Manha, Trato Policial.",
        ],
    },
    {
        name: "Detetive Policial",
        description:
            "Você vive segundo o código do policial, seja aquele que colocaram na parede da academia, ou aquele que você aprendeu na patrulha a pé em péssimas vizinhanças. Você faz distinção entre policiais, bandidos e civis — e é melhor que ninguém os misture.",
        ocupationalSkills: [
            "Armas de Fogo",
            "Atletismo",
            "Avaliar Honestidade",
            "Coletar Evidência",
            "Condução",
            "Direito",
            "Interrogatório",
            "Sentir Perigo",
            "Trato Policial",
        ],
        credito: [3, 4],
        specialSkills: [
            "Com o uso ponderado de Trato Policial, pode não só acalmar a polícia, mas ter acesso a processos, cenas de crime e presídios.",
            "Dentro de sua própria jurisdição, pontos em Trato Policial dão acesso a laboratórios de polícia (análises forenses, balística) e até o necrotério.",
            "Fora da jurisdição, pode precisar de um plano muito bom além do Trato Policial.",
        ],
    },
    {
        name: "Diletante",
        description:
            "Você é autossuficiente, vivendo de uma herança, fundo de renda fixa, ou outra fonte de renda independente. Livre das pressões do trabalho forçado, você pode se dedicar a qualquer profissão que escolher.",
        ocupationalSkills: [
            "Bajulação",
            "Crédito",
            "Equitação",
            "cinco outras habilidades à sua escolha",
        ],
        credito: [3, 3],
        specialSkills: [
            "Pode utilizar a reserva de Crédito para solicitar qualquer tipo de ajuda a suas conexões pessoais.",
            "Esses contatos são geralmente parentes, velhos colegas de escola, e pessoas da mesma classe social.",
        ],
    },
    {
        name: "Enfermeira",
        description:
            "A Enfermeira é um assistente médico treinado, às vezes do sexo masculino, mas com mais frequência do feminino. As enfermeiras são geralmente menos treinadas a fundo, sempre menos bem pagas e muitas vezes, menos distantes e insensíveis do que os médicos.",
        ocupationalSkills: [
            "Avaliar Honestidade",
            "Biologia",
            "Convencimento",
            "Farmácia",
            "Medicina",
            "Primeiros Socorros",
            "Burocracia ou Bajulação (a critério do Guardião)",
        ],
        credito: [2, 4],
        specialSkills: [
            "Usando Medicina ou Convencimento, tem acesso a registros médicos e enfermarias de hospitais.",
            "Se afiliada a um hospital ou sanatório, pode usar Convencimento automaticamente para adentrar qualquer parte da instituição.",
            "Ao usar Primeiros Socorros, cada ponto gasto recupera 3 pontos de Vitalidade (ao invés de 2).",
            "Pode estabilizar uma vítima gravemente ferida gastando apenas 1 ponto de Primeiros Socorros (ao invés de 2).",
        ],
    },
    {
        name: "Jornalista",
        description:
            "Seja para jornais, revistas ou rádio, você reúne os exemplos sociais e os transforma em uma estória, revelando a verdade sobre o mundo ao seu redor. Você pode tentar se manter separado da estória, especialmente se for sobre corrupção e ganância.",
        ocupationalSkills: [
            "Avaliar Honestidade",
            "Coletar Evidência",
            "Convencimento",
            "Disfarce",
            "Fotografia",
            "História Oral",
            "Idiomas (para correspondentes estrangeiros)",
            "Perseguição",
            "Trato Policial",
            "outra Habilidade Interpessoal",
        ],
        credito: [2, 4],
        specialSkills: [
            "Usando Convencimento, tem acesso aos obituários dos jornais.",
            "Em seu próprio jornal, pode fazer funcionários do arquivo buscarem artigos relevantes.",
            "Colegas jornalistas podem contar rumores e notícias de bastidores, a menos que seja um concorrente direto.",
        ],
    },
    {
        name: "Médico",
        description:
            "Você vê seu trabalho como símbolo do que há de melhor na sociedade: racional, humano, limpo, e altruísta. Se a sociedade pudesse ser curada ou liberta de suas doenças, do mesmo modo como o corpo pode ser purificado pelo tratamento ou cirurgia!",
        ocupationalSkills: [
            "Avaliar Honestidade",
            "Biologia",
            "Ciência Forense",
            "Contabilidade",
            "Convencimento",
            "Farmácia",
            "Idiomas (Latim)",
            "Medicina",
            "Primeiros Socorros",
        ],
        credito: [4, 6],
        specialSkills: [
            "Usando Medicina ou Convencimento, tem acesso a registros médicos e enfermarias de hospitais.",
            "Se afiliado a hospital, sanatório ou instituição de saúde, pode usar Convencimento automaticamente para adentrar qualquer parte dessa instituição.",
            "Ao usar Primeiros Socorros, cada ponto gasto recupera 3 pontos de Vitalidade (ao invés de 2).",
            "Pode estabilizar uma vítima gravemente ferida gastando apenas 1 ponto de Primeiros Socorros (ao invés de 2).",
        ],
    },
    {
        name: "Militar",
        description:
            "Você se coloca entre os outros e o perigo, por um salário, por sua bandeira, por seus companheiros, ou porque você não tem opções melhores. Você leva uma vida de hábitos e rotina, de tédio e burocracia, de poeira e exercícios físicos. E às vezes, de loucura, morte, sangue e pesadelos.",
        ocupationalSkills: [
            "Armas Brancas",
            "Armas de Fogo",
            "Atletismo",
            "Briga",
            "Intimidação",
            "Sobrevivência",
            "Exército/Fuzileiro: adicione Condução, Furtividade, Ocultação",
            "Paramédico/Médico: adicione Convencimento, Medicina, Primeiros Socorros",
            "Engenheiros/Armas Pesadas: adicione Condução, Explosivos, Reparos Mecânicos",
            "Marinha: adicione Astronomia, Pilotagem, Reparos Mecânicos",
            "Oficial (qualquer ramo): adicione Burocracia, Convencimento, Equitação ou Pilotagem",
        ],
        credito: [2, 5],
        specialSkills: [
            "Pode gastar 2 pontos de reserva de Convencimento para estabilizar um personagem em pânico ou instável, enquanto sua própria Estabilidade seja superior a 0.",
            "Se ainda estiver servindo, pode usar qualquer Habilidade Interpessoal para entrar em instalação militar do seu país (exceto bases expressamente secretas).",
            "Se for veterano de combate, os números de Dificuldade das capacidades de combate não aumentam em 1 até que sua Estabilidade ou Vitalidade fique abaixo de -5.",
            "Se for veterano de combate, sua Estabilidade é limitada a 10, mas algumas ameaças à Estabilidade podem ser feitas com Dificuldade menor.",
        ],
    },
    {
        name: "Parapsicólogo",
        description:
            "O meio acadêmico tem por você uma consideração questionável, enquanto os verdadeiros crentes desconfiam de sua sinceridade. Você caminha na fronteira entre a razão e a superstição, entre a fé e a prova. Você acredita que o sobrenatural é apenas o natural que ainda não estudamos.",
        ocupationalSkills: [
            "Antropologia",
            "Avaliar Honestidade",
            "Fotografia",
            "Ocultismo",
            "Reparos Elétricos",
            "Reparos Mecânicos",
            "Sentir Perigo",
            "Usar Biblioteca",
        ],
        credito: [2, 3],
        specialSkills: [
            "Como o Alienista, pode colocar Pontos de Criação e utilizar a habilidade Hipnose.",
            "Em um jogo extremamente pulp, pode ter poderes psíquicos reais, ou trabalhar em estreita colaboração com 'sensitivos'.",
        ],
    },
    {
        name: "Piloto",
        description:
            "Você vive para voar, e voa para viver. Você pode ser um veterano da Grande Guerra à procura de emoções em campanhas eleitorais, ou um mensageiro particular na esperança de ficar rico e fundar seu próprio serviço de transporte aéreo. O céu é o único lugar em que você quer estar.",
        ocupationalSkills: [
            "Astronomia",
            "Condução",
            "Pilotagem",
            "Reparos Elétricos",
            "Reparos Mecânicos",
            "Sentir Perigo",
        ],
        credito: [2, 3],
        specialSkills: [
            "Possui ou tem acesso regular a um avião. Seu tamanho e qualidade dependem da reserva de Crédito.",
        ],
    },
    {
        name: "Professor",
        description:
            "Você pode ser um legislador calmo, compartilhando a sabedoria de sua idade entre baforadas do seu cachimbo. Você pode ser uma pobre criança no corpo de um adulto, incompetente em tudo exceto no idioma alemão medieval, e vaidoso e mesquinho a esse respeito.",
        ocupationalSkills: [
            "Burocracia",
            "Idiomas",
            "Usar Biblioteca",
            "outra Habilidade Interpessoal",
            "três Habilidades Acadêmicas (incluindo Astronomia e Química para estes fins)",
        ],
        credito: [3, 5],
        specialSkills: [
            "Com credenciais acadêmicas intactas (Crédito 3+), usar Burocracia concede acesso quase ilimitado ao acervo restrito de bibliotecas, laboratórios de pesquisa, e muitos arquivos particulares e governamentais.",
            "Com Crédito 5 ou melhor, tem estabilidade no cargo e não pode ser removido da cátedra sem evidência clara e pública de torpeza moral.",
        ],
    },
];

