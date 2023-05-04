Feature: naviagtion et recherche sur google

    Scenario: recherche davidson-consulting sur google
        Given je navigue sur google
        When je vais accepter les cookies
        And je vais faire une recherche du mot cle "davidson-consulting"
        And je clique sur recherche
        Then je verifie le resultat 
    
    Scenario: recherche ac milan sur google
        Given je navigue sur google
        When je vais accepter les cookies
        And je vais faire une recherche du mot cle "ac milan"
        And je clique sur recherche
        Then je verifie le resultat 
    
    Scenario: recherche real madrid sur google
        Given je navigue sur google
        When je vais accepter les cookies
        And je vais faire une recherche du mot cle "real madrid"
        And je clique sur recherche
        Then je verifie le resultat 