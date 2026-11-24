/* =====================================================================
   VECTRIA – site content
   This is the ONLY file to edit for everyday updates:
   games, news and social networks.
   Each text exists in French (fr) and English (en).
   ===================================================================== */
window.VECTRIA = {

  /* ---------------- Social networks ----------------
     Paste the full link between the quotes to show a network.
     Leave '' (empty) and the card shows "Bientôt / Coming soon". */
  social: {
    tiktok:    '',
    instagram: '',
    youtube:   '',
    discord:   '',
  },

  contact: 'vectriaa@gmail.com',

  /* ---------------- Games ----------------
     status: 'test' (closed test, not public yet) or 'live' (on Google Play) */
  games: [
    {
      id: 'gemblox', name: 'Gemblox', icon: 'gemblox-icon.png', status: 'test',
      pkg: 'com.vectria.gemblox', version: '1.0.3', age: '13+',
      genre: { fr: 'Puzzle de blocs', en: 'Block puzzle' },
      short: {
        fr: 'Glisse les blocs sur la grille 8×8, complète les lignes et enchaîne les combos pour battre ton record.',
        en: 'Drag blocks onto the 8×8 grid, clear lines and chain combos to beat your high score.',
      },
      features: {
        fr: ['Grille 8×8, 3 pièces à placer à chaque tour', 'Combos et bonus quand la grille est vide', '30 fonds animés à débloquer', 'Partie sauvegardée automatiquement', 'Jouable hors ligne'],
        en: ['8×8 grid, 3 pieces to place each turn', 'Combos and a bonus for clearing the board', '30 animated backgrounds to unlock', 'Your game is saved automatically', 'Playable offline'],
      },
      ads: { fr: 'Bannière, pubs entre deux parties (jamais pendant les 2 premières), vidéos facultatives pour continuer, avoir de nouvelles pièces ou débloquer un fond.', en: 'Banner, ads between games (never during the first 2), optional videos to continue, get new pieces or unlock a background.' },
      purchases: null,
      extra: null,
      permissions: ['internet', 'vibrate', 'adid'],
    },
    {
      id: 'tournee-generale', name: 'Tournée Générale', icon: 'tournee-generale-icon.png', status: 'test',
      pkg: 'fr.tourneegenerale.app', version: '1.5.3', age: '18+',
      genre: { fr: 'Jeu de soirée', en: 'Party game' },
      short: {
        fr: 'Le jeu de cartes pour animer vos soirées entre amis : défis, votes et fous rires. À consommer avec modération.',
        en: 'The card game to liven up your nights with friends: challenges, votes and laughs. Please drink responsibly.',
      },
      features: {
        fr: ['Défis classiques, hasard, rapides & réflexes, débats & votes', 'Les prénoms des joueurs apparaissent dans les défis', 'Mode osé : 30 min gratuites avec une vidéo, ou à vie avec l’option premium', 'Chacun peut refuser un défi, une gorgée peut toujours être de l’eau'],
        en: ['Classic, random, quick & reflex, debate & vote challenges', 'Player names appear in the challenges', 'Daring mode: 30 free minutes with a video, or forever with premium', 'Anyone can skip a challenge, a sip can always be water'],
      },
      ads: { fr: 'Pubs AdMob, vidéo facultative pour débloquer le mode osé 30 minutes. Aucune pub avec l’option premium.', en: 'AdMob ads, optional video to unlock daring mode for 30 minutes. No ads with premium.' },
      purchases: { fr: 'Option premium à paiement unique (sans pub + mode osé à vie), via Google Play. Le paiement est géré par Google : Vectria ne voit jamais tes coordonnées bancaires.', en: 'One-time premium option (no ads + daring mode forever) through Google Play. Payment is handled by Google: Vectria never sees your payment details.' },
      extra: { fr: 'Les prénoms saisis restent sur ton téléphone.', en: 'The names you enter stay on your phone.' },
      permissions: ['internet', 'vibrate', 'adid', 'billing'],
    },
    {
      id: 'fletchy', name: 'Fletchy', icon: 'fletchy-icon.png', status: 'test',
      pkg: 'com.vectria.arrowly', version: '1.3.0', age: '13+',
      genre: { fr: 'Puzzle de réflexion', en: 'Logic puzzle' },
      short: {
        fr: 'Touche une flèche : elle sort si rien ne bloque son chemin. Trouve le bon ordre pour vider le plateau, jusqu’au mode Méga hard.',
        en: 'Tap an arrow: it slides out if nothing blocks its path. Find the right order to clear the board, all the way to Mega hard mode.',
      },
      features: {
        fr: ['Des niveaux de plus en plus difficiles', 'Une flèche bloquée coûte une vie', 'Indices pour montrer une flèche qui peut sortir', 'Mode Méga hard et fonds collector'],
        en: ['Levels that get harder and harder', 'A blocked arrow costs a life', 'Hints show an arrow that can slide out', 'Mega hard mode and collector backgrounds'],
      },
      ads: { fr: 'Pubs AdMob, vidéos facultatives, par exemple pour doubler une récompense.', en: 'AdMob ads, optional videos, for example to double a reward.' },
      purchases: null,
      extra: null,
      permissions: ['internet', 'adid'],
    },
    {
      id: 'neon-drift', name: 'Neon Drift', icon: 'neon-drift-icon.png', status: 'test',
      pkg: 'com.vectria.neondrift', version: '1.0.3', age: '13+',
      genre: { fr: 'Arcade', en: 'Arcade' },
      short: {
        fr: 'Pilote ton vaisseau dans un univers néon, évite les obstacles, ramasse des pièces et relève les défis du jour.',
        en: 'Fly your ship through a neon world, dodge obstacles, collect coins and complete daily challenges.',
      },
      features: {
        fr: ['Touche à gauche ou à droite pour piloter', 'Hangar de vaisseaux à débloquer avec tes pièces', '3 défis du jour et un coffre bonus', 'Classement et succès Google Play Jeux'],
        en: ['Tap left or right to steer', 'Hangar of ships to unlock with your coins', '3 daily challenges and a bonus chest', 'Google Play Games leaderboard and achievements'],
      },
      ads: { fr: 'Pubs AdMob, vidéos facultatives pour continuer après un crash ou doubler tes pièces.', en: 'AdMob ads, optional videos to continue after a crash or double your coins.' },
      purchases: null,
      extra: { fr: 'Si tu te connectes à Google Play Jeux, ton pseudo, ton avatar et tes scores sont partagés avec Google pour le classement.', en: 'If you sign in to Google Play Games, your gamer name, avatar and scores are shared with Google for the leaderboard.' },
      permissions: ['internet', 'vibrate', 'adid', 'games'],
    },
  ],

  /* ---------------- News ----------------
     Newest first. type: 'release', 'update', 'dev' (in development), 'studio' */
  news: [
    {
      date: '2026-11-24', type: 'studio',
      title: { fr: 'Le site Vectria fait peau neuve', en: 'The Vectria website gets a new look' },
      text: { fr: 'Fiches info pour chaque jeu, actualités, présentation du studio et réseaux sociaux : tout est maintenant au même endroit.', en: 'An info sheet for each game, news, studio presentation and social networks: everything is now in one place.' },
    },
    {
      date: '2026-11-17', type: 'update',
      title: { fr: 'Gemblox 1.0.3 : 30 fonds et 4 langues', en: 'Gemblox 1.0.3: 30 backgrounds and 4 languages' },
      text: { fr: '30 fonds animés à débloquer, le jeu en français, anglais, espagnol et portugais, une pose des blocs plus rapide et des scores qui montent plus vite.', en: '30 animated backgrounds to unlock, the game in English, French, Spanish and Portuguese, faster block placement and faster scores.' },
      game: 'gemblox',
    },
    {
      date: '2026-11-17', type: 'update',
      title: { fr: 'Arrowly devient Fletchy', en: 'Arrowly becomes Fletchy' },
      text: { fr: 'Notre puzzle de flèches change de nom avec la version 1.3.0, et gagne un mode Méga hard et des fonds collector.', en: 'Our arrow puzzle gets a new name with version 1.3.0, plus a Mega hard mode and collector backgrounds.' },
      game: 'fletchy',
    },
    {
      date: '2026-11-15', type: 'release',
      title: { fr: 'Nos 4 jeux en test sur Google Play', en: 'Our 4 games in testing on Google Play' },
      text: { fr: 'Gemblox, Tournée Générale, Fletchy et Neon Drift sont en test fermé avant leur sortie publique. Merci à nos testeurs pour leurs retours !', en: 'Gemblox, Tournée Générale, Fletchy and Neon Drift are in closed testing before their public release. Thanks to our testers for their feedback!' },
    },
  ],

  /* ---------------- In development ---------------- */
  upcoming: [
    {
      title: { fr: 'Espace membres', en: 'Members area' },
      text: { fr: 'Comptes joueurs et testeurs, chat avec l’équipe pour signaler un bug ou proposer une idée, candidatures pour devenir testeur.', en: 'Player and tester accounts, chat with the team to report a bug or suggest an idea, applications to become a tester.' },
      progress: { fr: 'En préparation', en: 'In preparation' },
    },
    {
      title: { fr: 'Prochain jeu', en: 'Next game' },
      text: { fr: 'Un nouveau jeu est en création. Annonce bientôt ici et sur nos réseaux.', en: 'A new game is in the works. Announcement soon, here and on our social networks.' },
      progress: { fr: 'En création', en: 'In development' },
    },
  ],
};
