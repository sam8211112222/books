

CREATE TABLE `book` (
                        `id` BIGINT NOT NULL AUTO_INCREMENT,
                        `title` VARCHAR(255) NOT NULL,
                        `author` VARCHAR(255) NOT NULL,
                        `isbn` VARCHAR(255) NOT NULL,
                        PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `book` (`title`, `author`, `isbn`) VALUES
                                                   ('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565'),
                                                   ('To Kill a Mockingbird', 'Harper Lee', '9780061120084'),
                                                   ('1984', 'George Orwell', '9780451524935'),
                                                   ('Pride and Prejudice', 'Jane Austen', '9780679783268'),
                                                   ('The Catcher in the Rye', 'J.D. Salinger', '9780316769488');
