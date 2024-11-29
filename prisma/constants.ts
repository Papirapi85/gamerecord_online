export const categories = [
  {
    name: 'NFS',
  },
  {
    name: 'F1',
  },
  // {
  //   name: 'Закуски',
  // },
  // {
  //   name: 'Коктейли',
  // },
  // {
  //   name: 'Напитки',
  // },
];

export const _ingredients = [
  {

  }
  // {
  //   name: 'NFS',
  //   price: 179,
  //   imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/ru/0/08/Need_for_Speed_Coverart.jpg',
  // },
  // {
  //   name: 'F1',
  //   price: 79,
  //   imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/ru/0/08/Need_for_Speed_Coverart.jpg',
  // },
  // {
  //   name: 'Сыры чеддер и пармезан',
  //   price: 79,
  //   imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
  // },
  // {
  //   name: 'Острый перец халапеньо',
  //   price: 59,
  //   imageUrl:
  //     'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
  // },
  // {
  //   name: 'Нежный цыпленок',
  //   price: 79,
  //   imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
  // },
  // {
  //   name: 'Шампиньоны',
  //   price: 59,
  //   imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
  // },
  // {
  //   name: 'Ветчина',
  //   price: 79,
  //   imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
  // },
  // {
  //   name: 'Пикантная пепперони',
  //   price: 79,
  //   imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
  // },
  // {
  //   name: 'Острая чоризо',
  //   price: 79,
  //   imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
  // },
  // {
  //   name: 'Маринованные огурчики',
  //   price: 59,
  //   imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
  // },
  // {
  //   name: 'Свежие томаты',
  //   price: 59,
  //   imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
  // },
  // {
  //   name: 'Красный лук',
  //   price: 59,
  //   imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
  // },
  // {
  //   name: 'Сочные ананасы',
  //   price: 59,
  //   imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
  // },
  // {
  //   name: 'Итальянские травы',
  //   price: 39,
  //   imageUrl:
  //     'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
  // },
  // {
  //   name: 'Сладкий перец',
  //   price: 59,
  //   imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
  // },
  // {
  //   name: 'Кубики брынзы',
  //   price: 79,
  //   imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
  // },
  // {
  //   name: 'Митболы',
  //   price: 79,
  //   imageUrl:
  //     'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
  // },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'NFS SHIFT',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/0/00/Need_for_Speed_Shift.jpg',
    categoryId: 1,
  },
  {
    name: 'NFS UNDERGROUND',
    imageUrl: 'https://habrastorage.org/webt/qc/ff/4e/qcff4e1tos7spaktx7ciklx3s1q.jpeg',
    categoryId: 1,
  },
  {
    name: 'NFS CARBON',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/e/e0/NFS-Carbon-Front.jpg',
    categoryId: 1,
  },
  {
    name: 'NFS Most Wanted 2005',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/1/15/NFS-Most-Wanted-Front.jpg/274px-NFS-Most-Wanted-Front.jpg',
    categoryId: 1,
  },
  {
    name: 'NFS Most Wanted 2005 5 laps',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/1/15/NFS-Most-Wanted-Front.jpg/274px-NFS-Most-Wanted-Front.jpg',
    categoryId: 1,
  },
  {
    name: 'NFS UNDERCOVER',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/a/a3/Need_for_Speed_Undercover_Coverart.jpg',
    categoryId: 1,
  },
  {
    name: 'NFS PROSTREET',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/ae/NFS-ProStreet-Front.jpg/800px-NFS-ProStreet-Front.jpg',
    categoryId: 1,
  },
  {
    name: 'NFS SHIFT 2',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/83/Shift2-cover.jpg/640px-Shift2-cover.jpg',
    categoryId: 1,
  },
  {
    name: 'NFS THE RUN',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/c/c0/Need_for_speed_the_run_cover.jpg',
    categoryId: 1,
  },
  {
    name: 'NFS WORLD',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/3/3d/Nfswo.jpg',
    categoryId: 1,
  },
  {
    name: 'NFS HOT PURSUIT',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/85/Need_for_Speed_Hot_Pursuit_2010.jpg',
    categoryId: 1,
  },
  {
    name: 'NFS RIVALS',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/8/88/Need_for_Speed-_Rivals_Cover_Art.jpeg',
    categoryId: 1,
  },
  {
    name: 'NFS Most Wanted 2012',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/7/72/NFS-Most-Wanted-2012-Front.jpg',
    categoryId: 1,
  },
  {
    name: 'NFS UNDERGROUND 2 NO NITRO',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/d/d0/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Need_for_Speed_Underground_2.jpg',
    categoryId: 1,
  },
  {
    name: 'NFS Hot Pursuit Remastered',
    imageUrl: 'https://images.deal.by/234488753_w600_h600_234488753.jpg',
    categoryId: 1,
  },
  {
    name: 'F1 23',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5b/F1_23_cover_art.jpg',
    categoryId: 2,
  },
  {
    name: 'F1 24',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/55/F1_24_cover_art.jpg',
    categoryId: 2,
  },
];
