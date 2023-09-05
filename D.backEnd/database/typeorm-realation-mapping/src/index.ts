import { AppDataSource } from './data-source'
import { IdCard } from './entity/IdCard'
import { User } from './entity/User'

AppDataSource.initialize()
  .then(async () => {
    // 1.
    // const user = new User();
    // user.firstName = 'Young';
    // user.lastName = 'zx';
    // user.age = 20;

    // const idCard = new IdCard();
    // idCard.cardName = '1';
    // idCard.user = user;

    // // await AppDataSource.manager.save(user)
    // // 设置了    cascade: true, 我们只需要保存一个就可以了
    // await AppDataSource.manager.save(idCard);

    // const ics = await AppDataSource.manager.create(IdCard,{
    //   id: 2,
    //   cardName: '芜湖'
    // });
    // console.log(ics);

    // 3.
    // const ics = await AppDataSource.manager.find(IdCard,{
    //   relations:{
    //     user: true
    //   }
    // });
    // console.log(ics);

    //4. queryBuilder
    const ics = await AppDataSource.manager
      .getRepository(IdCard)
      .createQueryBuilder('ic')
      .leftJoinAndSelect('ic.user', 'u')
      .getMany()

    console.log(ics)
  })
  .catch((error) => console.log(error))
