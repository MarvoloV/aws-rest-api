import axios from 'axios';
import { CustomersRepository } from './CustomersRepository';
import { Customer } from '../domain/Customer';
import { customerAdapter } from '../adapter/CustomerAdapter';
import { RandomUserResponse, ResultUsers } from '../domain/RandomUserResponse';

export class CustomersRepositoryImpl implements CustomersRepository {
  async findByFilter(customer: Customer): Promise<Customer[]> {
    const response = await axios.get<RandomUserResponse>(
      'https://randomuser.me/api/?results=100'
    );
    if (!response.data.results) {
      return [];
    }
    const filterUsers = response.data.results.filter((item: ResultUsers) =>
      item.name.first.toLowerCase().startsWith(customer.name.toLowerCase())
    );
    return customerAdapter(filterUsers);
  }
}
