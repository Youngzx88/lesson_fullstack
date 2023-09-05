import { AppDataSource } from './data-source'
import { Article } from './entity/Article'
import { Tag } from './entity/Tag'

AppDataSource.initialize()
  .then(async () => {
    // const a1 = new Article()
    // a1.title = 'aaaa'
    // a1.content = 'aaaaaaaaaa'

    // const a2 = new Article()
    // a2.title = 'bbbbbb'
    // a2.content = 'bbbbbbbbbb'

    // const t1 = new Tag()
    // t1.name = 'ttt1111'

    // const t2 = new Tag()
    // t2.name = 'ttt2222'

    // const t3 = new Tag()
    // t3.name = 'ttt33333'

    // a1.tags = [t1, t2]
    // a2.tags = [t1, t2, t3]

    // const entityManager = AppDataSource.manager

    // await entityManager.save(t1)
    // await entityManager.save(t2)
    // await entityManager.save(t3)

    // await entityManager.save(a1)
    // await entityManager.save(a2)

    // 2. 多对多的CRUD
    // const article = await entityManager
    // .createQueryBuilder(Article, "a")
    // .leftJoinAndSelect("a.tags", "t")
    // .getMany()

    // console.log(article);
    // console.log(article.map(item=> item.tags))
    
  })
  .catch((error) => console.log(error))
