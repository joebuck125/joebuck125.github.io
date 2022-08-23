package portfolio.personal.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import portfolio.personal.model.Journal;
import portfolio.personal.model.User;

import java.util.Optional;

@Repository
public interface JournalRepository extends CrudRepository<Journal, Long> {
    Optional<Journal> findByJournalEntry(String journalEntry);
    Optional<Journal> findByJournalDate(String journalDate);
    Optional<User> findByUser(String username);
    Optional<Journal> findById(Long id);
}
