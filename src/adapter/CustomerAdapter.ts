import { Customer } from '../domain/Customer';
import { ResultUsers } from '../domain/RandomUserResponse';

export const customerAdapter = (results: ResultUsers[]): Customer[] =>
  results.map(
    (item: ResultUsers) =>
      new Customer({
        id: item.id.value,
        name: item.name.first,
        lastName: item.name.last,
        phone: item.phone,
      })
  );
