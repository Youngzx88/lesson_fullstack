import { JoinColumn } from 'typeorm'
import { AppDataSource } from './data-source'
import { Department } from './entity/Department'
import { Employee } from './entity/Employee'

AppDataSource.initialize()
  .then(async () => {
    // 1. 1对多
    // const d1 = new Department();
    // d1.name = '技术部';

    // const e1 = new Employee();
    // e1.name = '张三';
    // e1.department = d1;

    // const d2 = new Department();
    // d2.name = '设备部';

    // await AppDataSource.manager.save(Department,d2)

    // const e2 = new Employee();
    // e2.name = '李四';
    // e2.department = d1;

    // const e3 = new Employee();
    // e3.name = '王五';
    // e3.department = d1;

    // const e4 = new Employee();
    // e4.name = '赵五';
    // e4.department = d2;

    // await AppDataSource.manager.save(Department, d2);
    // await AppDataSource.manager.save(Employee,e4);

    // 2. 级联查询
    // const deps = await AppDataSource.manager.createQueryBuilder()
    // .select("emp")
    // .from(Employee,"emp")
    // .leftJoinAndSelect("emp.department","epmDid")
    // .where("emp.departmentId = :id",{id:2})
    // .getMany()
    // console.log(deps)

    // 3. 删除某一个主表行，关联的从表也会被设置为null（或者同步删除）
    // await AppDataSource.manager.createQueryBuilder()
    // .delete()
    // .from(Employee)
    // .where("departmentId = :id", { id: 2 })
    // .execute();

    await AppDataSource.manager.createQueryBuilder()
    .delete()
    .from(Department)
    .where("id = :id", { id: 1 })
    .execute();

  })
  .catch((error) => console.log(error))
