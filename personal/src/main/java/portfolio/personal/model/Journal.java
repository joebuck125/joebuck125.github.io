package portfolio.personal.model;


import javax.persistence.*;

@Entity
public class Journal {

    @Id
    @GeneratedValue
    private Long id;
    private String journalDate;
    @Lob
    private String journalEntry;
    @ManyToOne
    private User user;

    public Long getId(){
        return id;
    }

    public String getJournalDate(){
        return journalDate;
    }

    public String getJournalEntry(){
        return journalEntry;
    }

    public User getUser(){
        return user;
    }

    public Journal(){}

    public Journal(String journalDate, String journalEntry, User user){
        this.journalDate = journalDate;
        this.journalEntry = journalEntry;
        this.user = user;
    }

    public String changeJournalEntry(String entryUpdate){
        this.journalEntry = entryUpdate;
        return this.journalEntry;
    }

}
