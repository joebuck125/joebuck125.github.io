package portfolio.personal;


import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import portfolio.personal.model.Journal;
import portfolio.personal.model.User;
import portfolio.personal.repository.JournalRepository;
import portfolio.personal.repository.UserRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private UserRepository userRepository;

    @Resource
    private JournalRepository journalRepository;

    @Override
    public void run(String... args) throws Exception {

        User joe = new User("bucknasty", "12345");
        userRepository.save(joe);

        Journal joeJournal = new Journal("Aug 23", "Hello React world! Just kidding, TJ owes me $12", joe);
        journalRepository.save(joeJournal);

    }
}
