import { Subject, PossibleNumbers, SubjectObject } from './typeDeclarations'

export function initSubjects(
  subjects?: Subject[],
  length: PossibleNumbers = 5,
) {
  return subjects
    ? subjects.reduce((sum: any, curr: Subject) => {
        const data = formatSubject(curr, length)
        sum[data.name] = 0
        return sum
      }, {})
    : { rating: 0 }
}

export function formatSubject(
  subject: Subject,
  length: PossibleNumbers = 5,
): SubjectObject {
  return typeof subject === 'string'
    ? { name: subject, length, title: subject }
    : {
        ...subject,
        title: subject.title || subject.name,
        length: subject.length || length,
      }
}

export const ratingIconType = (index: PossibleNumbers, rating: number) => {
  if (rating >= index || index - rating < 0.25) return 'full'
  return index - rating < 0.75 ? 'half' : 'empty'
}
