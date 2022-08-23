package portfolio.personal.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import portfolio.personal.model.Journal;
import portfolio.personal.model.User;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByUsernameIgnoreCase(String username);
    Optional<User> findByPassword(String password);
    Optional<Journal> findByJournals(String journal);
}
